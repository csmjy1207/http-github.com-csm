import Vue from "vue";
import VueRouter from 'vue-router';

// import Header from '@/components/Header.vue'
import Home from '../Home/index.vue';
import Vnt01 from '../Home/ant01.vue';
import Vnt02 from '../Home/ant02.vue';
import Vnt03 from '../Home/ant03.vue';

import Ts from '../Home/ts.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/vant01',
                component: Vnt01,
            },
            {
                path: '/vant02',
                component: Vnt02,
            },
            {
                path: '/vant03',
                component: Vnt03,
            },
            {
                path: '/ts',
                component: Ts,
            },
        ]
    },
    
    
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router;