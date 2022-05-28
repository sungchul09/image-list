import Vue from 'vue';
import VueRouter from 'vue-router';
// import ImageList from '@/views/ImageList';
// import ImageInfo from '@/views/ImageInfo';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'imageList/1/5',
        },
        {
            path: '/imageList/:page/:limit',
            name: 'imageList',
            component: () => import('@/views/ImageList.vue')
        },
        {
            path: '/imageInfo/:id',
            name: 'imageInfo',
            component: () => import('@/views/ImageInfo.vue')
        }
    ]
});
