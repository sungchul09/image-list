import Vue from 'vue';
import VueRouter from 'vue-router';
// import ImageList from '@/views/ImageList';
import ImageInfo from '@/views/ImageInfo';

Vue.use(VueRouter);

const defaultValue = {
  page: 1,
  limit: 300,
};

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: (to) => {
        to.params.page = defaultValue.page;
        to.params.limit = defaultValue.limit;
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
