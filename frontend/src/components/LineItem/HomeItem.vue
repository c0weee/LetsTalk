<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex items-center">
        <RouterLink :to="{ name: 'thread', params: { id: thread.groupId } }">
            <Avatar class="p-overlay-badge"
                image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
        </RouterLink>
        <RouterLink :to="{ name: 'thread', params: { id: thread.groupId } }">
            <span class="ml-2">{{ thread.groupName }}</span>
        </RouterLink>
    </div>
    <div class="leading-5 line-clamp-2 mb-3">
        <RouterLink :to="{ name: 'post', params: { id: thread.id } }" class="font-medium text-2xl"
            style="color: rgb(61, 164, 122)">
            {{ thread.title }}
        </RouterLink>
        <span class="ml-2">{{ thread.content }}></span>
    </div>
    <div>
        <span>{{ thread.username }}</span>
        <span class="ml-2">{{ thread.likes }} Likes</span>
        <span class="ml-2">{{ thread.replies }} Post</span>
    </div>
</template>
