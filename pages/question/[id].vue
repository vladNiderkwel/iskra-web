<script setup>

const question = ref(
    {
        id: 1,
        question: "Помогите",
        date: "01.01.2000",
        answer: "",
        author: {
            name: "Василек Василек"
        }
    }
)

const saveAnswer = () => {
    console.log(question.value.answer)
}

</script>

<template>
    <p class="title">Вопрос пользователя</p>

    <div class="mx-auto mt-4 w-1/2 min-w-fit">
        <div class="flex mb-4">
            <img class="mr-3 !my-auto rounded-full w-12 h-12" src="~assets/images/photo_placeholder.png" />
            <NuxtLink to="/" class="author">{{ question.author.name }}</NuxtLink>
        </div>
        <p class="w-full h-fit mb-4">{{ question.question }}</p>

        <textarea
            v-model="question.answer" placeholder="Ответ" type="text"
            class="text-input w-full max-h-72 min-h-8">
        </textarea>
        
        <a @click="saveAnswer" class="button-green-filled mt-4 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            <p class="ml-3">Сохранить ответ</p>
        </a>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Input.css";
@import "~/assets/css/Button.css";
</style>