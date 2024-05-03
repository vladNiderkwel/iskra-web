<script setup>
const { task } = defineProps(["task"])

</script>

<template>
    <div class="card" @click="navigateTo(`/task/${task.id}`)">
        <div class="flex w-full mb-2">
            <p class="w-full font-bold text-xl">{{ task.title }}</p>
        </div>
        <template v-for="(subtask, index) in task.subtasks">
            <p v-if="subtask.type === 2" class="italic">Свой ответ</p>
            <p v-if="subtask.type === 1" class="italic">Один ответ</p>
            <p v-if="subtask.type === 0" class="italic">Несколько ответов</p>
            <p class="mt-2">{{ subtask.question }}</p>
            <HorizontalDivider class="my-2" v-if="index < task.subtasks.length - 1"/>
        </template>
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
    border: solid var(--iskra-color-outline) 1px;
}

.card:hover {
    border-radius: 36px;
    cursor: pointer;
}

.available-badge {
    height: fit-content;
    width: fit-content;
    padding: 2px 8px;
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}

.unavailable-badge {
    height: fit-content;
    width: fit-content;
    padding: 2px 8px;
    background: var(--iskra-color-error-container);
    color: white;
}


</style>