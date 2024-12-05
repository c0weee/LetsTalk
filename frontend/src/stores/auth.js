import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(sessionStorage.getItem('token') || null);
    const user = ref(JSON.parse(sessionStorage.getItem('user')) || null);
    const isLogin = ref(!!token.value);

    const setAuth = (newToken, newUser) => {
        isLogin.value = true;
        token.value = newToken;
        user.value = newUser;

        sessionStorage.setItem('token', newToken);
        sessionStorage.setItem('user', JSON.stringify(newUser));
    }

    const clearAuth = () => {
        isLogin.value = false;
        token.value = null;
        user.value = null;

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }

    const updateUsername = (username) => {
        user.value.username = username;
        sessionStorage.setItem('user', JSON.stringify(user.value));
    }

    return { isLogin, token, user, setAuth, clearAuth, updateUsername };
});
