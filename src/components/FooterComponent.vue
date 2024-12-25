<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">

                        <NavItem
                        classItem="footer__item"
                        :link="links.header.link"
                        >
                            <img :src="require(`@/assets/logo/${links.header.img}`)" :alt="links.header.img">
                        </NavItem>

                        <NavItem 
                        classItem='footer__item'
                        v-for="link in links.other" 
                        :key="link.id"
                        :link="link.link" 
                        :text="link.text" />
                        
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
import NavItem from './NavItem.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        NavItem
    },
    data() {
        return {
            links: {
                header:
                {
                    id: uuidv4(),
                    img: 'Logo_black.svg',
                    link: '/'
                },
                other: [
                    {
                        id: uuidv4(),
                        text: 'Our coffee',
                        link: '/our-coffee'
                    },
                    {
                        id: uuidv4(),
                        text: 'For your pleasure',
                        link: '/goodspage'
                    },
                    {
                        id: uuidv4(),
                        text: 'Contact us',
                        link: '/contacts'
                    },
                ]
            }
        }
    }
}
</script>