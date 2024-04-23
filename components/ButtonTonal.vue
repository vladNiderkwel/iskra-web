<script setup>
const emit = defineEmits(['click']);
const { text } = defineProps(['text'])
const slots = useSlots()
const haveSVG = () => !!slots["default"]

console.log(text)
</script>

<template>
    <a @click="emit('click')">
        <slot></slot>
        <p :class="{ 'ml-3': haveSVG() }" >{{ text }}</p>
    </a>
</template>

<style scoped>
a {
    display: flex;
    height: fit-content;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 36px;
    outline: none;
    
    color: var(--iskra-color-on-primary-container);
    fill: var(--iskra-color-on-primary-container);
    background: var(--iskra-color-surface-variant);

    transition: all 0.4s;
}

a:hover {
    border-radius: 8px;
    cursor: pointer;
}
</style>