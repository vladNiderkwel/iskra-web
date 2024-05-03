<script setup>
const { userTask } = defineProps(['userTask'])
</script>

<template>
    <div @click="navigateTo(`/user-task/check/${userTask.id}`)" class="card mx-auto">
        <p class="font-bold text-xl mt-2 w-full">{{ userTask.task.title }}</p>

        <div class="flex self-center mt-4 ml-auto w-fit">
            <img class="ml-4 mr-2 w-6 h-6 rounded-full my-auto" src="~assets/images/photo_placeholder.png" />
            <p class="my-auto">{{ userTask.user.name }}</p>
        </div>
    </div>
</template>

<style scoped>
@import '~/assets/css/Button.css';

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