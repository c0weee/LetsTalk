<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';

import axiosInstance from '@/utils/axiosInstance';

const toast = useToastStore();
const authStore = useAuthStore();
const isVisible = defineModel();

const user = ref({ email: '', password: '' });

const login = async () => {
    try {
        const response = await axiosInstance.post('user/login', user.value);

        authStore.setAuth(response.data.token, response.data.user);
        localStorage.setItem('toast', response.data.message);

        window.location.reload();
    }
    catch (error) {
        console.log(error);
        toast.error(error);
    }
}
</script>

<template>

    <Dialog v-model:visible="isVisible" modal header="Login / Register" class="auth-dialog">
        <div v-focustrap class="w-full flex flex-col gap-6 p-5">
            
            <IconField>
                <InputIcon>
                    <i class="pi pi-envelope"></i>
                </InputIcon>
                <InputText v-model="user.email" type="text" placeholder="Email" class="!w-full" />
            </IconField>

            <Password v-model="user.password" placeholder="Password" :feedback="false" toggleMask />
            <Button type="submit" label="Submit" class="mt-1" @click="login"></Button>

        </div>
    </Dialog>

</template>

<style>
.p-password-input {
    width: 100% !important;
}

.auth-dialog {
    width: 25rem;
}

.auth-dialog .p-dialog-header {
    padding-bottom: 0 !important;
}

.auth-dialog #pv_id_2_header {
    padding: 1rem;
}

.p-password:hover {
    cursor: pointer;
}
</style>