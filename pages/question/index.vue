<script setup>
const config = useRuntimeConfig()
const page = ref(useRoute().query.page ? useRoute().query.page : 1)
const query = ref("")

const { data, error, pending, refresh } = await useAsyncData("allquestions",
    () => $fetch(`${config.public.baseUrl}/question`, {
        method: 'get',
        query: {
            page: page.value,
            query: query.value
        }
    })
)

watch(page, () => refresh())

watch(query, () => search())

const clear = () => {
    query.value = ""
    search()
}

const search = () => {
    page.value = 1
    refresh()
}
</script>

<template>
    <p class="title">Вопросы пользователей</p>

    <div v-on:submit.prevent="search" class="search mt-4 mx-auto">
        <div class="icon" @click.prevent="search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
        </div>
        <input type="text" class="mx-1" v-model="query" placeholder="Поиск" />
        <div class="icon" @click.prevent="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </div>
    </div>

    <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
                d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
        </svg>
    </ButtonTonal>

    <div class="w-min mx-auto">
        <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

        <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

        <template v-else>
            <p v-if="data.content.length === 0 && query.length > 0" class="text-center mt-2">
                По запросу "{{ query }}" ничего не нашлось
            </p>

            <template v-else>
                <QuestionCard v-for="question in data.content" :question="question" class="my-3 mx-auto" />
                <Pagination v-if="data.totalPages > 1" class="mt-8" v-model="page" :totalPages="data.totalPages" />
            </template>
        </template>
    </div>

</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Button.css';
@import '~/assets/css/Search.css';
</style>