<script setup>
import { ref, nextTick, computed, watch, onMounted } from 'vue';
import { format } from 'date-fns';

// Reactive state
const isExpanded = ref(false);
const isTruncated = ref(false);

const containerRef = ref(null);
const contentRef = ref(null);

const thread = defineModel();
const content = ref(thread);

// Function to check if content is truncated
const checkContentTruncation = async () => {
    await nextTick();
    if (containerRef.value && contentRef.value) {
        const container = containerRef.value;

        const containerHeight = container.scrollHeight;
        const contentHeight = contentRef.value.scrollHeight;

        isTruncated.value = (contentHeight > containerHeight);
    }
};

const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
    nextTick(checkContentTruncation);
};

const contentStyle = computed(() => ({
    maxHeight: isExpanded.value ? 'none' : '100px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
}));

watch(isExpanded, () => {
    nextTick(checkContentTruncation);
});

watch(content, () => {
    nextTick(checkContentTruncation);
});

onMounted(() => {
    nextTick(checkContentTruncation);
})

</script>

<template>
    <div class="font-medium text-xl mb-3">
        {{ thread.title }}
    </div>

    <div class="flex mb-3">
        <div>
            <Avatar v-if="thread.avatar" class="p-overlay-badge border" size="large" :image="thread.avatar" />
            <Avatar v-else class="p-overlay-badge" icon="pi pi-user" size="large" />
        </div>

        <div class="ml-5 w-full flex justify-between">
            <div>
                <div>
                    Created By: {{ thread.username }}
                </div>
                <div>
                    {{ thread.updatedAt ? format(thread.updatedAt, 'yyyy-MM-dd HH:mm') : '' }}
                </div>
            </div>
            <div>
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>

    <div class="flex">
        <div>
            <Avatar class="p-overlay-badge invisible" icon="pi pi-user" size="large" />
        </div>

        <div class="ml-5 container" ref="containerRef">
            <div :style="contentStyle">
                <p ref="contentRef"> {{ thread.content }}</p>
            </div>

            <button v-if="isTruncated" @click="toggleContent" class="w-full p-2">
                Show More
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    overflow: hidden;
}

button:hover {
    color: rgb(61, 164, 122);
}
</style>