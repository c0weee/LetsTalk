<script setup>
import { defineProps } from 'vue';
import { format } from 'date-fns';

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex">
        <div>
            <Avatar v-if="post.avatar" class="p-overlay-badge border" :image="post.avatar" size="large" />
            <Avatar v-else class="p-overlay-badge" icon="pi pi-user" size="large" />
        </div>
        <div class="ml-5 w-full">
            <div class="flex bg-rose-50 px-1">
                <div>{{ post.createdBy }}</div>
                <div class="ml-5">
                    {{ post.createdAt ? format(post.createdAt, 'yyyy-MM-dd HH:mm') : '' }}
                </div>
            </div>
            <div>
                {{ post.content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    flex: 1;
}

.avatar {
    width: 48px;
    height: 48px;
    border: 1px solid black;
    margin: 0 10px;
}

.userInfo {
    background-color: hsla(160, 100%, 37%, 1);
}
</style>