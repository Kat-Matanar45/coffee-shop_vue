import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '@/views/HeroView.vue';
import OurCofee from '@/views/OurCofee.vue';
import GoodspageFor from '@/views/GoodspageFor.vue';
import Contacts from '@/views/Contacts.vue'
import ThankYouPage from '@/views/ThankYouPage.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCofee },
    { path: '/goodspage', component: GoodspageFor },
    { path: '/contacts', component: Contacts },
    { path: '/thank-you-page', component: ThankYouPage }
  ];

  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router