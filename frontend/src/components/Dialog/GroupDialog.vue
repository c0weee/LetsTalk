<script setup>
import { ref, defineProps, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';
import CustomEditor from '../CustomEditor.vue';
import CustomFileUpload from '../CustomFileUpload.vue';

const toast = useToastStore();
const router = useRouter();
const auth = useAuthStore();

const dialog = ref();
const isVisible = ref(false);
const newGroup = ref({ name: null, intro: null, avatar: null });

const oriGroup = defineModel();
const props = defineProps({
    isNew: {
        type: Boolean,
        default: true
    }
});

const submit = async () => {
    try {
        let response;

        if (props.isNew) {
            response = await axiosInstance.post('group/create', newGroup.value);
            router.push({ name: 'thread', params: { id: response.data.id } });
        }
        else {
            response = await axiosInstance.post('group/updateById', {
                id: oriGroup.value.id,
                ...newGroup.value
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
        return;
    }

    dialog.value.maximize()
}

watch(isVisible, () => {
    if (props.isNew) return;

    if (isVisible.value) {
        newGroup.value = { ...oriGroup.value }
    }
    else {
        oriGroup.value = { ...newGroup.value };
        newGroup.value = { name: null, intro: null, avatar: null };
    }
});

</script>

<template>
    <Button v-if="auth.isLogin && isNew" @click="isVisible = true" icon="pi pi-plus" class="text-sm font-thin ml-1" severity="secondary"></Button>
    <Button v-if="auth.isLogin && !isNew && oriGroup.createdBy === auth.user.id" @click="isVisible = true" class="text-sm font-thin ml-1" icon="pi pi-pencil" severity="secondary"></Button>
    
    <Dialog v-model:visible="isVisible" @show="maximize" ref="dialog" :header="isNew ? 'Add Group' : 'Update Group'"
        maximizable class="!p-10">

        <div class="my-5">
            <InputText v-model="newGroup.name" placeholder="Group Name" class="!w-full mb-5" />

            <CustomEditor v-model="newGroup.intro" placeholder="Introduction"></CustomEditor>
            <CustomFileUpload v-model:avatar="newGroup.avatar"></CustomFileUpload>

            <Button @click="submit" class="w-full mt-5">Submit</Button>
        </div>
    </Dialog>
</template>

<style>
.ql-image,
.p-fileupload-file-badge {
    display: none !important;
}
</style>
