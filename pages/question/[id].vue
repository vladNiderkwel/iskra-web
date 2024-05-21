<script setup>
import axios from 'axios';
import Title from '~/components/Title.vue';

const config = useRuntimeConfig()

const id = useRoute().params.id

const { data, error, pending, refresh } =
    await useFetch(`${config.public.baseUrl}/question/${id}`)

const fetch = ref({
    pending: false,
    status: null,
    error: false
})

const saveAnswer = async () => {
    fetch.value.pending = true
    fetch.value.error = false

    axios.put(`${config.public.baseUrl}/question`, data.value)
        .then((response) => {
            fetch.value.pending = false
        })
        .catch((err) => {
            fetch.value.pending = false
            fetch.value.error = true
        })
}

const report = () => {
    console.log(question.value.answer)
}

</script>

<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-auto">
        <Title text="Вопрос пользователя" />

        <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
            </svg>
        </ButtonTonal>

        <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

        <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

        <div v-else class="mx-auto mt-4 w-4/5 min-w-min">
            <div class="flex mb-4">
                <img class="mr-3 !my-auto rounded-full w-9 h-9" src="~assets/images/photo_placeholder.png" />
                <p class="text-lg my-auto">{{ data.author.name }}</p>
            </div>
            <p class="w-full h-fit my-4" id="question">{{ data.question }}</p>

            <textarea class="text-input w-full max-h-72 min-h-8" v-model="data.answer" placeholder="Ответ" type="text">
        </textarea>

            <ButtonFilledPrimary text="Сохранить ответ" @click="saveAnswer" class=" mt-4 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
            </ButtonFilledPrimary>

            <LoadingIndicator v-if="fetch.pending" />

            <ErrorLabel v-else-if="fetch.error" class="mx-auto" />
        </div>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Input.css";

#question {
    overflow-wrap: anywhere;
}
</style>