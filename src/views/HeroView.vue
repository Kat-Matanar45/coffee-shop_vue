<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <NavBarComponent />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <HeaderComponent 
                        :titleHeader="titleHeader" 
                        />

                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a 
                        href="./coffeepage.html" 
                        class="preview__btn"
                        @click.prevent="smoothScroll"
                        >More</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="about" ref="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title" ref="ourBest">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <BestItemComponent 
                            v-for="coffee in bestseller"
                            :key="coffee.id"
                            classItem='best__item' 
                            :name="coffee.name"
                            :image="coffee.image" 
                            :price="coffee.price" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import BestItemComponent from '@/components/BestItemComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        NavBarComponent,
        BestItemComponent,
        HeaderComponent
    },
    data() {
        return {
            bestseller: [
                {
                    id: uuidv4(),
                    image: 'coffee-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    price: 10.73
                },
                {
                    id: uuidv4(),
                    image: 'coffee-2.jpg',
                    name: 'Presto Coffee Beans 1kg',
                    price: 15.99
                },
                {
                    id: uuidv4(),
                    image: 'coffee-3.jpg',
                    name: 'AROMISTICO Coffee 1kg',
                    price: 6.99
                }
            ],
            titleHeader: 'Everything You Love About Coffee'
        }
    },
    methods: {
        smoothScroll() {
            this.$refs.ourBest.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        }
    }
}

</script>