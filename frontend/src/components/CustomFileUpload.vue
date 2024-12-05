<script setup>
import { toBase64, toBlob } from '@/utils/fileUtils';
import { onMounted } from 'vue';

const fileUpload = defineModel('fileUpload');
const avatar = defineModel('avatar');

const updateAvatar = async (e) => {
    if (e.files.length > 1) {
        fileUpload.value.files.splice(0, 1);
    }

    avatar.value = await toBase64(e.files[0]);
}

const removeAvatar = () => {
    avatar.value = null;
}

onMounted(() => {
    if (avatar.value) {
        const blob = toBlob(avatar.value)
        blob.objectURL = window.URL.createObjectURL(blob);

        fileUpload.value.files.push(blob);
    }
});
</script>

<template>
    <FileUpload ref="fileUpload" :multiple="false" accept="image/*" :maxFileSize="51200" :showUploadButton="false"
        customUpload @select="updateAvatar" @remove="removeAvatar">
        <template #empty>
            <span>Drag and drop files to here to upload.</span>
        </template>
    </FileUpload>
</template>

<style>
.p-fileupload-file-badge {
    display: none !important;
}
</style>