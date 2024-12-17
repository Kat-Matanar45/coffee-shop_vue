import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'HeroView', component: () => import('@/views/HeroView.vue')},
    { path: '/our-coffee', name: 'OurCofee', component: () => import('@/views/OurCofee.vue')},
    { path: '/goodspage', name: 'Goodspage', component: () => import('@/views/GoodspageFor.vue')},
    { path: '/contacts', name: 'Contacts', component: () => import('@/views/Contacts.vue')},
    { path: '/thank-you-page', name: 'ThankYouPage', component: () => import('@/views/ThankYouPage.vue')}
    kzkz
  ];

  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router