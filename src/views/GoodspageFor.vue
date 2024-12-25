<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />
                    </div>
                </div>
                <HeaderComponent 
                :titleHeader="titleHeader"
                />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <BestItemComponent
                            v-for="coffee in products" 
                            :key="coffee.id"
                            classItem = 'shop__item'
                            :name="coffee.name"
                            :image="coffee.image"
                            :price="coffee.price"
                            :country="coffee.country"
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
            products: [
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'Presto Coffee Beans 1kg',
                    country: 'Brazil',
                    price: 15.99
                },
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 6.99
                },
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: uuidv4(),
                    image: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                }
            ],
            titleHeader: 'For your pleasure'
        }
    }
}

</script>