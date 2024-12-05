<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const route = useRoute();
const auth = useAuthStore();
const toast = useToastStore();

const isLoading = ref(true);
const user = ref({ username: '', avatar: '', email: '' });
const groups = ref([]);
const threads = ref([]);

const fetchData = async () => {
    try {
        if (auth.isLogin) {
            const [userRes, groupRes, threadRes] = await Promise.all([
                axiosInstance.get(`user/getById?id=${route.params.id}`),
                axiosInstance.get(`group/getByUserId`),
                axiosInstance.get(`thread/getByUserId`),
            ])

            user.value = userRes.data;
            groups.value = groupRes.data;
            threads.value = threadRes.data;
        }

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
    finally {
        isLoading.value = false;
    }
}

const updateUser = async () => {
    try {
        const response = await axiosInstance.post(`user/updateById`, { ...user.value });

        auth.updateUsername(user.value.username);
        toast.success(response.data.message);

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
}

onMounted(fetchData);
</script>


<template>
    <div v-if="isLoading" class="absolute-center text-2xl">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" />
    </div>

    <Tabs v-else value="0">

        <TabList>
            <Tab value="0">User Info</Tab>
            <Tab value="1">My Group</Tab>
        </TabList>

        <TabPanels>
            <TabPanel value="0">
                <div class="flex flex-col gap-2 mt-3 mb-5">
                    <label for="email">Email</label>
                    <InputText id="email" placeholder="email" v-model="user.email" disabled />
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <label for="username">Username</label>
                    <InputText id="username" placeholder="username" v-model="user.username" />
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <label for="avatar">Avatar</label>
                    <CustomFileUpload v-model:avatar="user.avatar"></CustomFileUpload>
                </div>

                <div class="flex">
                    <Button @click="updateUser">Update</Button>
                </div>

            </TabPanel>

            <TabPanel value="1">
                <div class="flex flex-wrap mt-3 items-center justify-start">

                    <div v-for="group in groups" :key="group.id" class="lg:w-1/6 w-1/5 mx-1 mb-8 text-center">
                        <RouterLink :to="{ name: 'thread', params: { id: group.groupId } }">

                            <div>
                                <Avatar v-if="group.avatar" class="p-overlay-badge !w-24 !h-24 border"
                                    :image="group.avatar" size="xlarge" />
                                <Avatar v-else class="p-overlay-badge !w-24 !h-24 border" icon="pi pi-objects-column"
                                    size="xlarge" />
                            </div>

                            <div class="line-clamp-1">
                                {{ group.name }}
                            </div>

                        </RouterLink>
                    </div>

                </div>
            </TabPanel>

        </TabPanels>
    </Tabs>
</template>
