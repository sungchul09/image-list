import Vue from 'vue';
import VueRouter from 'vue-router';
import ImageList from '@/views/ImageList';
import ImageInfo from '@/views/ImageInfo';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'imageList',
        },
        {
            path: '/imageList',
            name: 'imageList',
            component: ImageList
        },
        {
            path: '/imageInfo/:id',
            name: 'imageInfo',
            component: ImageInfo
        }
    ]
});
