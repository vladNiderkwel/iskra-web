<script setup>
import ServiceCard from '~/components/ServiceCard.vue';

const config = useRuntimeConfig()

const { pending, data: services, error, refresh } =
    await useFetch(`${config.public.baseUrl}/service/all`, { 
        method: 'get',
    })

</script>

<template>
    <p class="title">Сервисы</p>

    <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
                d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
        </svg>
    </ButtonTonal>

    <div  class="w-min mx-auto">
        <LoadingIndicator v-if="pending" />

        <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

        <template v-else v-for="(s, index) in services">
            <ServiceCard :service="s" :refresh="refresh"/>
            <HorizontalDivider v-if="index < services.length - 1" class="my-2" />
        </template>
    </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Button.css';
</style>