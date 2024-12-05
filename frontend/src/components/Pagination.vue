<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const props = defineProps({
    count: {
        type: Number,
        required: true
    },
    page: {
        type: Number,
        required: true
    }
})

const updatePage = (e) => {
    updatePagination();
    router.replace({ query: { ...route.query, page: e.page + 1 } });
}

</script>

<template>
    <Paginator :rows="50" :totalRecords="count" @page="updatePage"></Paginator>
</template>
