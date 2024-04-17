<script setup>
const questions = ref([
    {
        id: 1,
        question: "5 класс. Английский язык. Нужно написать этот текст в Past Simple. На прошлых выходных я сначала сходил на урок по английскому. Весь оставшийся день я играл в компьютер потому что на улице была плохая погода. В воскресенье я гулял по городу с друзьями. Была хорошая весенняя погода.",
        date: "01.01.2000",
        author: {
            name: "Яшик мммм"
        }
    },
    {
        id: 1,
        question: "ere",
        date: "01.01.2000",
        author: {
            name: "Василек"
        }
    },
    {
        id: 1,
        question: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        date: "01.01.2000",
        author: {
            name: "Василек Василек"
        }
    },
])

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
        <input type="text" class="mx-1" v-model="searchPrompt" placeholder="Поиск" />
        <div class="icon" @click.prevent="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </div>
    </div>

    <div class="flex flex-col items-center mt-4">
        <QuestionCard v-for="q in questions" :question="q" class="my-2" />
    </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Button.css';
@import '~/assets/css/Search.css';
</style>