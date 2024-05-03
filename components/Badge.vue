<script setup>
   const {text} = defineProps(['text']) 
</script>

<template>
    <p class="rounded-2xl inline">{{ text }}</p>
</template>

<style scoped>
p {
    height: fit-content;
    width: auto;
    padding: 2px 8px;
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}
</style>