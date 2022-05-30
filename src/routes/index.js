import Vue from 'vue';
import VueRouter from 'vue-router';
// import ImageList from '@/views/ImageList';
import ImageInfo from '@/views/ImageInfo';
import { store } from '@/store/index';

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

router.beforeEach((to, from, next) => {
  store.commit('startSpinner');
  // setTimeout(() => {
  next();
  // }, 500);
});

router.afterEach((to, from) => {
  if (to.name === 'imageInfo') {
    store.commit('backBtn');
  } else if (to.name === 'imageList') {
    store.commit('pageBtn');
  }
  store.commit('endSpinner');
});
