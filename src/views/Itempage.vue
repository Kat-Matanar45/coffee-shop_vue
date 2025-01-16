<template>
    <main>
        <div class="banner" :class="pageName === 'OurItempage' ? 'coffepage-banner' : 'goodspage-banner'">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />
                    </div>
                </div>
                <h1 class="title-big">{{ coffee.name }}</h1>
            </div>
        </div>

        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-1">
                        <img class="shop__girl" :src="require(`@/assets/img/${coffee.image}`)" alt="coffee_item">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About it</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__point">
                            <span>Country:</span>
                            Brazil
                        </div>
                        <div class="shop__point">
                            <span>Description:</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat.
                        </div>
                        <div class="shop__point">
                            <span>Price:</span>
                            <span class="shop__point-price"> {{ coffee.price | addCurrency }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
    components: {
        NavBarComponent
    },
    computed: {
        pageName() {
            return this.$route.name
        },
        coffee() {
        const pageGetter = this.pageName === 'OurItempage' ? 'getCoffeeById' : 'getGoodsById'
        return this.$store.getters[pageGetter](this.$route.params.id)
        }
    }
}

</script>