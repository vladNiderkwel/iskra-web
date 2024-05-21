<script setup>
const { post } = defineProps(['post'])
const config = useRuntimeConfig()
</script>

<template>
    <div @click="navigateTo(`/post/${post.id}`)" class="card">
        
        <img v-if="post.photoUrl.length < 64" src="~assets/images/pattern_2.png"
            class="w-full object-cover h-56 mb-4 card-image" />
        <img v-else :src="`${config.public.baseUrl}/images/posts/${post.photoUrl}.jpg`"
            class="w-full object-cover h-56 mb-4 card-image">

        <div class="content">
            <p class="font-bold text-2xl w-full mb-2">{{ post.title }}</p>

            <p class="description w-full text-justify mt-2">{{ post.description }}</p>

            <div class="flex justify-between mt-2">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                    <p class="w-fit ml-3 my-auto">{{ post.views }}</p>
                </div>

                <p class="w-fit my-auto">{{ getDateString(post.publicationDate) }}</p>
            </div>
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

.card-image {
    border-radius: 8px;
    transition: all 0.4s;
}

.card:hover > .card-image {
    border-radius: 36px;
}

.content {
    padding: 0 20px 20px;
}
</style>