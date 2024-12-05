<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { format } from 'date-fns/format';
import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const route = useRoute();
const auth = useAuthStore();
const toast = useToastStore();

const isLoading = ref(true);

const group = ref({});
const tdata = ref({});

const isInGroup = ref(true);

const getParams = (params) => {
    const query = new URLSearchParams();

    if (params.id) { query.append('id', params.id); }
    if (params.page) { query.append('page', params.page); }
    if (params.search) { query.append('search', params.search); }

    return query.toString();
}

const fetchData = async (data) => {
    try {
        const params = getParams(data);

        if (auth.isLogin) {
            const response = await axiosInstance.get(`group/isUserIn?id=${route.params.id}&userId=${auth.user.id}`);
            isInGroup.value = response.data;
        }
        else {
            isInGroup.value = false;
        }

        const [groupRes, threadRes] = await Promise.all([
            axiosInstance.get(`group/getById?id=${route.params.id}`),
            axiosInstance.get(`thread/getByGroupId?${params}`)
        ]);

        group.value = groupRes.data;
        tdata.value = threadRes.data;
    }
    catch (error) {
        console.log(error);
        toast.error(error);
    }
    finally {
        isLoading.value = false;
    }
}

const joinGroup = async () => {
    try {
        const response = await axiosInstance.post('group/join', { groupId: route.params.id });
        isInGroup.value = response.data.result;

        toast.success(response.data.message);
    }
    catch (error) {
        console.log(error);
        toast.error(error);
    }
}

const exitGroup = async () => {
    try {
        const response = await axiosInstance.delete('group/exit', {
            params: { groupId: route.params.id }
        })

        isInGroup.value = !response.data.result;
        toast.success(response.data.message);
    }
    catch (error) {
        console.log(error);
        toast.error(error);
    }
}

watch(
    () => ({
        id: route.params.id,
        search: route.query.search,
        page: route.query.page
    }),
    fetchData,
    { immediate: true }
);

</script>

<template>
    <div v-if="isLoading" class="absolute-center text-2xl">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" />
    </div>

    <div v-else>
        <div class="mb-5">
            <div class="flex mb-5 justify-between items-center">
                <div class="flex items-center gap-3">
                    <div>
                        <Avatar v-if="group.avatar" class="p-overlay-badge !w-15 !h-15 border" :image="group.avatar"
                            size="xlarge" />
                        <Avatar v-else class="p-overlay-badge !w-15 !h-15" icon="pi pi-objects-column" size="xlarge" />
                    </div>

                    <div class="text-xl font-bold">
                        {{ group.name }}
                    </div>
                </div>
                <div>
                    <Button v-if="!isInGroup && auth.isLogin && auth.user.id !== group.createdBy" @click="joinGroup"
                        class="font-thin ml-1">Join Group</Button>
                    <Button v-if="isInGroup && auth.isLogin && auth.user.id !== group.createdBy" @click="exitGroup"
                        class="font-thin ml-1">Exit Group</Button>

                    <GroupDialog v-if="auth.isLogin && auth.user.id === group.createdBy" :isNew="false"
                        v-model="group" />
                </div>
            </div>

            <div class="bg-rose-50 rounded px-3 pt-4 pb-5">
                <div class="flex gap-5">
                    <div class="font">
                        Created At: {{ group.createdAt ? format(group.createdAt, 'MM-dd HH:mm') : ''
                        }}
                    </div>
                    <div>
                        Created By: {{ group.username }}
                    </div>
                </div>

                <Divider type="dotted"></Divider>

                <div class="ql-container ql-snow" style="border-width: 0;">
                    <div class="ql-editor" v-html="group.intro">
                    </div>
                </div>

                <Editor style="display: none;" />

            </div>
        </div>

        <div class="mt-10 flex justify-between items-center">
            <div class="text-xl font-bold">Threads</div>
            <ThreadDialog :isNew="true" :groupId="route.params.id" />
        </div>

        <div v-if="tdata.count === 0" class="text-center my-10 font-medium text-xl">
            No threads found!
        </div>

        <div v-else class="mt-10">

            <div class="flex w-full">
                <div class="w-9/12 font-medium">Title</div>
                <div class="w-2/12 font-medium">Created By</div>
                <div class="w-1/12 text-center font-medium">Count</div>
                <div class="w-2/12 text-end font-medium">Last Replied</div>
            </div>

            <Divider type="dotted" class="!my-2"></Divider>

            <div v-for="thread in tdata.threads" :key="thread.id">
                <div class="flex w-full">
                    <div class="w-9/12 line-clamp-1 pr-5">
                        <RouterLink :to="{ name: 'post', params: { id: thread.id } }">
                            {{ thread.title }}
                        </RouterLink>
                    </div>
                    <div class="w-2/12 line-clamp-1">{{ thread.createdBy }}</div>
                    <div class="w-1/12 text-center">{{ thread.count }}</div>
                    <div class="w-2/12 text-end">{{ thread.lastReplied ? format(thread.lastReplied, 'MM-dd HH:mm') : ''
                        }}</div>
                </div>

                <Divider type="dotted" class="!my-2"></Divider>
            </div>
        </div>

        <div class="flex justify-between items-center mt-5">
            <Search />
            <Pagination :count="tdata.count || 0" :page="parseInt(route.query.page) || 1" />
        </div>
    </div>
</template>
