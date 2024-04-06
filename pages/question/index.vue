<script setup>
    import '~/assets/css/Titles.css';
    import '~/assets/css/Question.css';

    const questions = ref([
        {
            id: 1,
            question: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
            date: "01.01.2000",
            author: {
                name: "Василек Василек"
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

    <div class="flex flex-col items-center">
        <QuestionCard v-for="q in questions" :question="q" />
    </div>
</template>