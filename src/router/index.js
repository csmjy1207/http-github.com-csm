import Vue        from 'vue';
import VueRouter  from 'vue-router';

Vue.use(VueRouter);

var routes = [
    {
      path     : '/',
      name     : 'Home',
      component: () => import('@/views/pages/Home/index.vue'),
    },
    {
      path     : '/home',
      name     : 'HomeIndex',
      component: () => import('@/views/pages/Home/index.vue'),
    },
    ...promote,
    ...userCenter,
  ]

const router = new VueRouter({
    mode       : 'history',
    base       : process.env.BASE_URL,
    routes,
  });
  
  export default router;