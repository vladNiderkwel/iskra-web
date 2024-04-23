<script setup>
const emit = defineEmits(['click']);
const { text } = defineProps(['text'])
const slots = useSlots()
const haveSVG = () => !!slots["default"]
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
    
    color: var(--iskra-color-on-secondary-container);
    fill:  var(--iskra-color-on-secondary-container);
    outline: solid var(--iskra-color-outline) 1px;

    transition: all 0.4s;
}

a:hover {
    background: var(--iskra-color-secondary-container);
    border-radius: 8px;
    cursor: pointer;
}
</style>