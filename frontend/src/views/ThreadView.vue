<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';
import { useRoute, useRouter } from 'vue-router';

import axiosInstance from '@/utils/axiosInstance';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();
const toast = useToastStore();

const isLoading = ref(true);
const isLike = ref(false);

const thread = ref({});
const pData = ref([]);

const newPost = ref();
const toReplyId = ref();

const getParams = (params) => {
    const query = new URLSearchParams();

    if (params.id) { query.append('id', params.id); }
    if (params.page) { query.append('page', params.page); }

    return query.toString();
}

const fetchData = async (data) => {
    try {
        const params = getParams(data);

        const [thread_response, post_response] = await Promise.all([
            axiosInstance.get(`thread/getById?id=${data.id}`),
            axiosInstance.get(`post/getByThreadId?${params}`)
        ]);

        thread.value = thread_response.data;
        pData.value = post_response.data;

        if (auth.isLogin) {
            const likeResponse = await axiosInstance.get(`thread/isLikeByUserId?id=${data.id}`);
            isLike.value = likeResponse.data;
        }


    } catch (error) {
        console.error('Failed to fetch data:', err);
        toast.error(error);
    }
    finally {
        isLoading.value = false;
    }
}

const submitPost = async () => {
    try {
        const response = await axiosInstance.post(`post/create`, {
            threadId: route.params.id,
            content: newPost.value,
            parentId: toReplyId.value || null
        });

        pData.value.count++;
        newPost.value = '';

        if (pData.value.count > 50) {
            const newPage = (parseInt(route.query.page) || 1) + 1;
            router.replace({ query: { ...route.query, page: newPage } });

        } else {
            pData.value.posts.push(response.data);
        }

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
}

const toReply = (id) => {
    toReplyId.value = id;
}

const likeThread = async () => {
    try {
        let response;

        if (!isLike.value) {
            response = await axiosInstance.post(`thread/addLike`, {
                threadId: route.params.id,
            });
        }
        else {
            response = await axiosInstance.delete(`thread/deleteLike`, {
                data: {
                    threadId: route.params.id
                }
            });
        }

        isLike.value = !isLike.value;
        toast.success(response.data.message);

    } catch (error) {
        console.log('Failed to fetch data:', error);
        toast.error(error);
    }
}

watch(
    () => ({
        id: route.params.id,
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
        
        <ThreadItem v-model="thread">
            <template #buttons>
                <Button v-if="auth.isLogin" @click="likeThread" :icon="isLike ? 'pi pi-thumbs-up-fill' : 'pi pi-thumbs-up'" severity="secondary"  class="text-sm font-thin ml-1"></Button>
                <ThreadDialog :isNew="false" v-model="thread" />
            </template>
        </ThreadItem>

        <div class="text-base font-medium">Replies</div>
        
        <Divider />

        <div v-if="pData.count == 0" class="mb-5">
            No Post found!
        </div>

        <div v-else class="mt-5">
            
            <ul>
                <li class="mb-10" v-for="post in pData.posts" :key="post.id">
                    <PostItem :post="post">
                        <template #button>
                            <button @click="toReply(post.id)">Reply</button>
                        </template>
                    </PostItem>
                </li>
            </ul>

            <div class="footer">
                <Pagination :count="pData.count" :page="parseInt(route.query.page) || 1" />
            </div>
        </div>
        
        <div v-if="auth.isLogin">
            <div class="font-medium text-lg mb-3">New Post</div>
            <Textarea v-model="newPost" style="height: 240px" class="w-full mb-3"></Textarea>
            <Button @click="submitPost">Submit</button>
        </div>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    padding: 0;
}

.footer {
    margin: 1rem 0;
}

div {
    width: 100%;
    font-size: 1.5vm;
}
</style>