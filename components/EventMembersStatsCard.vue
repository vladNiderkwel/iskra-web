<script setup>
const config = useRuntimeConfig()
const { event } = defineProps(['event'])
</script>

<template>
    <div @click="navigateTo(`/event/${event.id}`)" class="card mx-auto py-2 px-4">

        <div class="flex justify-between">
            <p class="py-auto">{{ getDateString(event.startDate) + " / " + getDateString(event.endDate) }}</p>

            <div class="flex self-center py-auto ml-4 w-fit">
                <img v-if="event.author.photoUrl.length < 64" class="ml-4 mr-2 w-6 h-6 rounded-full my-auto"
                    src="~assets/images/photo_placeholder.png" />
                <img v-else class="ml-4 mr-2 w-6 h-6 rounded-full my-auto"
                    :src="`${config.public.baseUrl}/images/photos/${event.author.photoUrl}.jpg`" />
                <p class="my-auto">{{ event.author.name }}</p>
            </div>
        </div>

        <p class="font-bold text-lg mt-2 w-full">{{ event.title }}</p>

        <div class="flex mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z" />
            </svg>
            <p class="ml-3">{{ event.members.length }} участников</p>
        </div>
    </div>
</template>

<style scoped>
@import '~/assets/css/Button.css';

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
}

.card:hover {
    border-radius: 36px;
    cursor: pointer;
}
</style>