<script setup>
const config = useRuntimeConfig()
const { userTask } = defineProps(["userTask"])
</script>

<template>
    <div class="card flex" @click="navigateTo(`/task/check/${userTask.id}`)">
        <div class="py-auto me-4">
            <p class="w-full font-bold text-xl">{{ userTask.task.title }}</p>
            <p class="w-full text-base">{{ userTask.task.reward }} опыта</p>
        </div>
        
        <div class="flex self-center ml-auto w-fit py-auto">
            <img v-if="userTask.user.photoUrl.length < 64" class="h-8 w-8 rounded-full mr-2 my-auto"
                src="~assets/images/photo_placeholder.png" />
            <img v-else class="h-8 w-8 rounded-full mr-2 my-auto"
                :src="`${config.public.baseUrl}/images/photos/${userTask.user.photoUrl}.jpg`" />
            <p class="my-auto">{{ userTask.user.name }}</p>
        </div>
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