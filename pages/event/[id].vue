<script setup>
import Title from '~/components/Title.vue';

const config = useRuntimeConfig()

const id = useRoute().params.id

const { data, error, pending, refresh } = await useAsyncData(`event-${id}`,
    () => $fetch(`${config.public.baseUrl}/event/${id}`)
)

</script>

<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-auto">
        <Title :text="data.title" />

        <div class="w-1/2 mx-auto">

            <p class="mt-3 text-center">{{ getDateString(data.startDate) + " / " + getDateString(data.endDate) }}</p>

            <div class="flex justify-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z" />
                </svg>
                <p class="ml-3">{{ data.members.length }} участников</p>
            </div>

            <div class="flex self-center mt-3 w-fit">
                <img class="mr-2 w-6 h-6 rounded-full my-auto" src="~assets/images/photo_placeholder.png" />
                <p class="my-auto">{{ data.author.name }}</p>
            </div>

            <p class="font-bold text-xl mt-3">Описание</p>
            <p class="text-justify mt-2 mx-auto">{{ data.description }}</p>
        </div>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
</style>