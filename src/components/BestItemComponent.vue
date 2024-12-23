<template>
    <div :class="classItem">
        <img :src="require(`@/assets/img/${image}`)" :alt="image">
        <div class="best__item-title">
            {{ name }}
        </div>
        <div class="shop__item-country">{{ country }}</div>
        <div class="best__item-price">{{price}}$</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: false
            },
            price: {
                type: Number,
                required: true
            },
            classItem: {
                type: String,
                required: true
            }
        }
    }
</script>