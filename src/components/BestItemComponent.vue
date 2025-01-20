<template>
    <div :class="classItem" @click="onEmmit(coffee.id)">
        <img :src="coffee.image" :alt="coffee.image">
        <div class="best__item-title">
            {{ coffee.name }}
        </div>
        <div class="shop__item-country">{{ coffee.country }}</div>
        <div class="best__item-price">{{coffee.price | addCurrency}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            classItem: {
                type: String,
                required: true
            },
            coffee: {
                type: Object,
                Required: true
            }
        },
        methods: {
            onEmmit(id) {
                this.$emit('onNavigate', id)
            }
        }
    }
</script>