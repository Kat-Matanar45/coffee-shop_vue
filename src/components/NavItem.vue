<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}</router-link>
    </li>
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                Required: true
            },
            text: {
                type: String,
                Required: true
            },
            classItem: {
                type: String,
                Required: true
            }
        }
    }
</script>