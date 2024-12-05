<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './stores/auth';
import { useToastStore } from './stores/toast';

const router = useRouter()
const auth = useAuthStore();
const toast = useToastStore();

const isVisible = ref(false);

const logout = () => {
    auth.clearAuth();
    window.location.reload();
}

const login = () => {
    isVisible.value = true;
}

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            router.push({ name: 'home' });
        }
    },
    {
        label: 'Groups',
        icon: 'pi pi-objects-column',
        command: () => {
            router.push({ name: 'group' });
        }
    },
    {
        label: 'Login',
        icon: 'pi pi-sign-in',
        command: login,
    }
]);

onMounted(() => {
    const storedToast = localStorage.getItem('toast');

    if (storedToast) {
        localStorage.removeItem('toast');
        toast.success(storedToast);
    }

    if (auth.isLogin) {

        items.value = items.value
            .filter(item => item.label !== 'Login')
            .concat([
                {
                    isUsername: true,
                    command: () => {
                        router.push({ name: 'user', params: { id: auth.user.id } });
                    }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: logout,
                }
            ]);
    }
});
</script>

<template>
    <Menubar :model="items">
        <template #start>
            <h1 class="text-3xl font-medium pr-5">LetsTalk</h1>
        </template>

        <template #item="{ item, props }">
            
            <RouterLink v-if="!item?.isUsername" to="" v-slot="{}" custom>
                <a v-ripple v-bind="props.action" @click="item.command">
                    <span :class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </RouterLink>

            <RouterLink v-else to="" v-slot="{}" custom>
                <a v-ripple v-bind="props.action" @click="item.command">
                    <span class="pi pi-user"></span>
                    <span class="ml-2">{{ auth.user.username }}</span>
                </a>
            </RouterLink>

        </template>

    </Menubar>

    <Toast />
    <AuthDialog v-model="isVisible" />

    <main>
        <RouterView />
    </main>

</template>

<style>

.p-menubar {
    padding: 0rem !important;
    margin: 2.5rem 15rem 5rem 15rem;
    border: none !important;
    background-color: rgb(10, 18, 26);
    justify-content: space-between;
}

@media (max-width: 1200px) {
    .p-menubar {
        margin: 2.5rem 5rem 5rem 5rem;
    }
}

</style>