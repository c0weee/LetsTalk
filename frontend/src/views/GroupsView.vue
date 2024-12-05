<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const toast = useToastStore();

const groups = ref([]);
const isLoading = ref(true);

const fetchData = async () => {
    try {
        const response = await axiosInstance.get('group/getByMemberCount');
        groups.value = response.data;
    }
    catch (error) {
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

    <div v-else>
        
        <div class="flex justify-between">
            <h1 class="text-2xl font-medium">Groups</h1>
            <GroupDialog :isNew=true />
        </div>

        <div v-if="groups.length === 0" class="absolute-center text-2xl">No group!</div>
    
        <div v-else class="mt-10">
            <ul>
                <li v-for="group in groups" :key="group.id" class="mb-4">
                    <GroupItem :group="group"></GroupItem>
                    <Divider type="dotted" class="!my-4" />
                </li>
            </ul>
        </div>
    </div>

</template>