<script setup>
const { task } = defineProps(["task"])

</script>

<template>
    <div class="card flex">
        <p class="w-full font-bold text-xl">{{ task.title }}</p>
        <p class="unavailable-badge ml-2 rounded-2xl">Недоступно</p>
    </div>
</template>

<style scoped>
.card {
    width: 64%;
    min-width: 400px;

    border-radius: 8px;
    padding: 20px;
    transition: all 0.4s;

    background: var(--iskra-color-surface-variant);
    color: var(--iskra-color-on-surface-variant);
    fill: var(--iskra-color-on-surface-variant);
    border: solid var(--iskra-color-error) 1px;
}

.unavailable-badge {
    height: fit-content;
    width: fit-content;
    padding: 2px 8px;
    background: var(--iskra-color-error);
    color: var(--iskra-color-surface);
}
</style>