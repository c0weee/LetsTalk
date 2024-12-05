<script setup>
import { ref, defineProps, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const auth = useAuthStore();
const router = useRouter();
const toast = useToastStore();

const dialog = ref();
const isVisible = ref(false);
const newThread = ref({ title: null, content: null });
const oriThread = defineModel();

const props = defineProps({
    isNew: {
        type: Boolean,
        default: true
    },
    groupId: {
        type: String,
        default: ''
    }
});

const submit = async () => {
    try {
        let response;

        if (props.isNew) {
            response = await axiosInstance.post('thread/create', {
                groupId: props.groupId,
                ...newThread.value
            });

            router.push({ name: 'post', params: { id: response.data.result.id } });
        }
        else {
            response = await axiosInstance.post('thread/updateById', {
                groupId: oriThread.value.id,
                ...newThread.value
            });

            isVisible.value = false;
        }

        toast.success(response.data.message);

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
}

const maximize = () => {
    if (dialog.value.maximized) {
        return
    }

    dialog.value.maximize()
}

watch(isVisible, () => {
    if (props.isNew) return;

    if (isVisible.value) {
        newThread.value = { ...oriThread.value }
    }
    else {
        oriThread.value = { ...newThread.value };
        newThread.value = { title: null, content: null, avatar: null };
    }
});

</script>

<template>
    <Button v-if="auth.isLogin && isNew" @click="isVisible = true" icon="pi pi-plus" class="text-sm font-thin ml-1" severity="secondary"></Button>
    <Button v-if="auth.isLogin && !isNew && oriThread.createdBy === auth.user.id" @click="isVisible = true" class="text-sm font-thin ml-1" icon="pi pi-pencil" severity="secondary"></Button>

    <Dialog v-model:visible="isVisible" @show="maximize" ref="dialog" :header="isNew ? 'Add Thread' : 'Update Thread'"
        maximizable class="!p-10">

        <div class="my-5">
            <InputText v-model="newThread.title" placeholder="Title" class="!w-full mb-5"/>
            <Textarea v-model="newThread.content" placeholder="Content" class="!w-full" style="height: 360px;"></Textarea>
            <Button @click="submit" class="w-full mt-5">Submit</Button>
        </div>
    </Dialog>

</template>

<style scoped>
.container {
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
}

.container div:not(:first-child) {
    margin-top: 2rem;
}

input {
    width: 50%;
    align-self: center;
}
</style>
