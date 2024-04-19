<script setup>
const config = useRuntimeConfig()
const page = parseInt(useRoute().query.page)

const { data, error, pending, refresh } =
    await useFetch(`${config.public.baseUrl}/test`, {
        method: 'get',
        query: {
            page: isNaN(page) ? 1 : page
        }
    })
</script>

<template>
    <p class="title">Задания</p>

    <div v-on:submit.prevent="search" class="search mt-4 mx-auto">
        <div class="icon" @click.prevent="search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
        </div>
        <input type="text" class="mx-1" v-model="searchPrompt" placeholder="Поиск" />
        <div class="icon" @click.prevent="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </div>
    </div>

    <NuxtLink to="/task/add" class="mx-auto my-4 button-green-tonal">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <p class="ml-3">Добавить</p>
    </NuxtLink>

    <div class="w-min mx-auto">
        <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

        <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

        <template v-else>
            <template v-for="(test, index) in data.content">
                <!--<TaskCard :task="task" />-->
                <HorizontalDivider v-if="index < data.content.length - 1" class="my-2" />
            </template>

            <div class="flex mt-4 justify-center items-center pages" v-if="data.totalPages > 1">
                <NuxtLink v-if="data.currentPage >= 2" :to="`/task?page=${data.currentPage - 1}`" class="page-number">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </NuxtLink>

                <NuxtLink class="page-number" v-for="pg in data.totalPages"
                    :class="{ 'active-page': pg === data.currentPage }" :to="`/task?page=${pg}`">
                    <p>{{ pg }}</p>
                </NuxtLink>

                <NuxtLink v-if="data.currentPage <= data.totalPages - 1" :to="`/task?page=${data.currentPage + 1}`"
                    class="page-number">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </NuxtLink>
            </div>
        </template>
    </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Button.css';
@import '~/assets/css/Search.css';
</style>