<script setup>
import { onMounted, ref } from 'vue';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const toast = useToastStore();

const threads = ref([]);
const isLoading = ref(true);

const fetchData = async () => {
    try {
        const response = await axiosInstance.get('thread/getByLikes');
        threads.value = response.data;

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
    finally {
        isLoading.value = false;
    }
}

onMounted(fetchData);

</script>

<template>
    <div v-if="isLoading" class="absolute-center text-2xl">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" />
    </div>

    <div v-else-if="threads.length === 0" class="absolute-center text-2xl">
        No post!
    </div>

    <div v-else>
        <ul>
            <li v-for="thread in threads" :key="thread.id">
                <HomeItem :thread="thread"></HomeItem>
                <Divider type="dotted" class="!my-8" />
            </li>
        </ul>
    </div>
</template>