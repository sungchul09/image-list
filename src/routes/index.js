import Vue from 'vue';
import VueRouter from 'vue-router';
// import ImageList from '@/views/ImageList';
import ImageInfo from '@/views/ImageInfo';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: (to) => {
        to.params.page = 1;
        to.params.limit = 30;
        return {
          name: 'imageList',
        };
      },
    },
    {
      path: '/imageList/:page/:limit',
      name: 'imageList',
      // component: ImageList
      component: () => import('@/views/ImageList.vue'),
    },
    {
      path: '/imageInfo/:id',
      name: 'imageInfo',
      component: ImageInfo,
    },
  ],
});
