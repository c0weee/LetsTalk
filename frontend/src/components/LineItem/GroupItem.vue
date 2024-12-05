<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    group: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex">
        <RouterLink :to="{ name: 'thread', params: { id: group.id } }">
            <Avatar v-if="group.avatar" class="p-overlay-badge !w-20 !h-20 border" :image="group.avatar" size="xlarge" />
            <Avatar v-else class="p-overlay-badge !w-20 !h-20" icon="pi pi-objects-column" size="xlarge" />
        </RouterLink>

        <div class="ml-5 flex flex-col text-base">
            <div class="flex-1 flex items-center">
                <RouterLink :to="{ name: 'thread', params: { id: group.id } }">
                    {{ group.name }}
                </RouterLink>
            </div>
            <div class="flex-1">
                <span>
                    {{ group.memberCount }} members
                </span>
            </div>
        </div>
    </div>
</template>
