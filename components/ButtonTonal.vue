<script setup>
const emit = defineEmits(['click']);
const { text } = defineProps(['text'])
const slots = useSlots()
const haveSVG = () => !!slots["default"]
</script>

<template>
    <a @click="emit('click')" class="flex h-fit w-fit py-2 px-4">
        <slot></slot>
        <p :class="{ 'ml-3': haveSVG() }" >{{ text }}</p>
    </a>
</template>

<style scoped>
a {
    border-radius: 36px;
    outline: none;
    
    color: var(--iskra-color-on-surface-container);
    fill: var(--iskra-color-on-surface-container);
    background: var(--iskra-color-surface-variant);

    transition: all 0.4s;
}

a:hover {
    border-radius: 8px;
    cursor: pointer;
}
</style>