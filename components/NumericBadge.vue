<script setup>
const { number } = defineProps(['number'])
</script>

<template>
    <p class="my-auto mx-auto p-2 text-center rounded-full">{{ number }}</p>
</template>

<style scoped>
    p {
        min-width: 26px;
        background: var(--iskra-color-secondary);
        color: var(--iskra-color-background);
    }
</style>