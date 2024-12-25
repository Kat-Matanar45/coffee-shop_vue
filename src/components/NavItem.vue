<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}<slot></slot></router-link>
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
                Required: false
            },
            classItem: {
                type: String,
                Required: true
            }
        }
    }
</script>