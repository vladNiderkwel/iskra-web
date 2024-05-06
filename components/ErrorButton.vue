<script setup>
const emit = defineEmits(['click'])
</script>

<template>
    <a @click="emit('click')">
        <slot></slot>
    </a>
</template>

<style scoped>
a {
    display: flex;
    height: fit-content;
    width: fit-content;
    padding: 8px;
    border-radius: 9999px;

    transition: all 0.4s;

    fill: var(--iskra-color-error);
    border: solid var(--iskra-color-error) 1px;
}

a:hover {
    background: var(--iskra-color-error);
    fill: var(--iskra-color-error-container);
    cursor: pointer;
}
</style>