<script setup>
const { number } = defineProps(['number'])
</script>

<template>
    <p class="my-auto mx-auto p-2 rounded-full">{{ number }}</p>
</template>

<style scoped>
    p {
        background: var(--iskra-color-secondary);
        color: var(--iskra-color-background);
    }
</style>