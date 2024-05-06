<script setup>
const { post } = defineProps(['post'])
const config = useRuntimeConfig()
</script>

<template>
    <div @click="navigateTo(`/post/${post.id}`)" class="card">
        <img v-if="post.photoUrl.length < 64" src="~assets/images/pattern_2.png" class="w-full object-cover h-56 mb-4"/>
        <img v-else :src="`${config.public.baseUrl}/images/posts/${post.photoUrl}.jpg`" class="w-full object-cover h-56 mb-4">
        <div class="content">
            <p class="font-bold text-2xl w-full mb-2">{{ post.title }}</p>
            <p class="description w-full text-justify">{{ post.description }}</p>
            <p class="w-fit ml-auto">{{ getDateString( post.publicationDate ) }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 64%;
    min-width: 500px;
    max-width: 70%;

    border-radius: 8px;
    transition: all 0.4s;

    background: var(--iskra-color-surface-variant);
    color: var(--iskra-color-on-surface-variant);
    fill: var(--iskra-color-on-surface-variant);
    border: solid var(--iskra-color-outline) 1px;

    overflow: hidden;
}

.card:hover {
    border-radius: 36px;
    cursor: pointer;
}

.content {
    padding: 0 20px 20px;
}
</style>