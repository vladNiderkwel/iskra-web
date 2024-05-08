<script setup>
const { text } = defineProps(['text'])
</script>

<template>
    <h1 class="w-fit mx-auto">{{ text }}</h1>
</template>