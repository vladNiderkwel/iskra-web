<script setup>
const config = useRuntimeConfig()
const { question } = defineProps(['question'])

</script>

<template>
    <div @click="navigateTo(`/question/${question.id}`)" class="card">

        <div class="flex">
            <img v-if="question.author.photoUrl.length < 64" class="mr-3 my-auto w-8 h-8 rounded-full"
                src="~assets/images/photo_placeholder.png" />
            <img v-else class="mr-3 my-auto w-8 h-8 rounded-full"
                :src="`${config.public.baseUrl}/images/photos/${question.author.photoUrl}.jpg`" />

            <p class="my-auto">{{ question.author.name }}</p>
        </div>

        <p class="mt-4 content">{{ question.question }}</p>
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

.content {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>