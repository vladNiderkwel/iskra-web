<script setup>

const question = ref(
    {
        id: 1,
        question: "ПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогитеПомогите",
        date: "01.01.2000",
        answer: "",
        author: {
            name: "Василек Василек"
        }
    }
)

const config = useRuntimeConfig()

const fetch = ref({
    pending: false,
    status: null,
    error: false
})

const saveAnswer = async () => {
    fetch = await useFetch(`${config.public.baseUrl}/question`, {
        method: "put",
        body: {
            question: question
        }
    })
}

const report = () => {
    console.log(question.value.answer)
}

</script>

<template>
    <p class="title">Вопрос пользователя</p>

    <div class="mx-auto mt-4 w-4/5 min-w-min">
        <div class="flex mb-4">
            <img class="mr-3 !my-auto rounded-full w-9 h-9" src="~assets/images/photo_placeholder.png" />
            <p class="text-lg my-auto">{{ question.author.name }}</p>
        </div>
        <p class="w-full h-fit mb-4" id="question">{{ question.question }}</p>

        <textarea class="text-input w-full max-h-72 min-h-8" v-model="question.answer" placeholder="Ответ" type="text">
        </textarea>

        <ButtonFilledPrimary text="Сохранить ответ" @click="saveAnswer" class=" mt-4 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
        </ButtonFilledPrimary>

        <LoadingIndicator v-if="fetch.pending" />

        <ErrorLabel v-else-if="fetch.error" />
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Input.css";

#question {
    overflow-wrap: anywhere;
}
</style>