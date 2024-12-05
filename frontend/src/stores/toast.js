import { defineStore } from 'pinia';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { useAuthStore } from './auth';

export const useToastStore = defineStore('toast', () => {
    const toast = useToast();  // Access PrimeVue Toast
    const router = useRouter();
    const auth = useAuthStore();

    const success = (message) => {
        toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

    const error = (err) => {
        toast.add({ 
            severity: 'error', 
            summary: 'Error', 
            detail: err?.response?.data?.errorMessage || 'An error occurred', 
            life: 3000 
        });

        if (err.response.status === 401) {
            router.push({ name: 'home' });
        }
    }

    return { success, error };
});
