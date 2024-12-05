import { createRouter, createWebHistory } from 'vue-router';

const GroupView = () => import('@/views/GroupView.vue');
const PostView = () => import('@/views/ThreadView.vue');
const UserView = () => import('@/views/UserView.vue');
const HomeView = () => import('@/views/HomeView.vue');
const GroupsView = () => import('@/views/GroupsView.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/group',
            name: 'group',
            component: GroupsView
        },
        {
            path: '/group/:id',
            name: 'thread',
            component: GroupView
        },
        {
            path: '/group/thread/:id',
            name: 'post',
            component: PostView
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        }
    ]
});

export default router;
