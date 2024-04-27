<script setup>
const { task } = defineProps(["task"])

</script>

<template>
    <div class="card" @click="navigateTo(`/task/${task.id}`)">
        <template v-for="(subtask, index) in task.subtasks">
            <p v-if="subtask.type === 2" class="italic">Свой ответ</p>
            <p v-if="subtask.type === 1" class="italic">Один ответ</p>
            <p v-if="subtask.type === 0" class="italic">Несколько ответов</p>
            <p>{{ subtask.question }}</p>
            <div> {{ task }} </div>
            <HorizontalDivider class="my-2" v-if="index < task.length"/>
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
</style>