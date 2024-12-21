<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
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
                            <BestItemComponent />
                            <BestItemComponent />
                            <BestItemComponent />
                            <BestItemComponent />
                            <BestItemComponent />
                            <BestItemComponent />
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

export default {
    components: {
        NavBarComponent,
        BestItemComponent
    },
    data() {
        return {
            products: [
                {
                    id: 0,
                    img: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: 1,
                    img: 'good-1.jpg',
                    name: 'Presto Coffee Beans 1kg',
                    country: 'Brazil',
                    price: 15.99
                },
                {
                    id: 2,
                    img: 'good-1.jpg',
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 6.99
                },
                {
                    id: 3,
                    img: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: 4,
                    img: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                },
                {
                    id: 5,
                    img: 'good-1.jpg',
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73
                }
            ]
        }
    }
}

</script>