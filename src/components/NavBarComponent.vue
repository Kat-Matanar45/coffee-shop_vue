<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

            <!-- <li class="header__item">
                <router-link :to="links.header.link">
                    <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
                </router-link>
            </li> -->

            <nav-item 
            :link='links.header.link'
            classItem="header__item"
            >
                <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
            </nav-item>

            <nav-item 
            v-for="link in links.other"
            :key="link.id"
            classItem='header__item' 
            :link="link.link" 
            :text="link.text" 
            />

        </ul>
    </header>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
    components: {
        NavItem
    },
    data() {
        return {
            links: {
                header: {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                other: [
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee'
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/goodspage'
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contacts'
                }
                ]
            }
        }
    }
}
</script>