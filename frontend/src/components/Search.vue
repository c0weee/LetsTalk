<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const search = ref();

const updatePage = () => {
    const newQuery = { ...route.query };

    if (search.value == '') {
        delete newQuery.search;
    }
    else {
        newQuery.search = search.value;
    }

    router.replace({ query: newQuery });
}
</script>

<template>
    <InputGroup class="!w-1/3 !h-1/6">
        <InputText v-model="search" placeholder="Keyword" class="!p-1" @keydown.enter="updatePage" />
        <Button icon="pi pi-search" class="text-sm" severity="secondary" @click="updatePage"></Button>
    </InputGroup>
</template>
