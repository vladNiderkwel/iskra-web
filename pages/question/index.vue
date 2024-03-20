<script setup>
    import '~/assets/css/Titles.css';
    import '~/assets/css/Question.css';

    const questions = ref([
        {
            question: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
            date: "01.01.2000",
            author: {
                name: "Василек Василек"
            }
        },
        {
            question: "ere",
            date: "01.01.2000",
            author: {
                name: "Василек"
            }
        },
        {
            question: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
            date: "01.01.2000",
            author: {
                name: "Василек Василек"
            }
        },
    ])

</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full h-full px-2 py-4 overflow-y-scroll">
            <p class="title">Вопросы пользователей</p>
            <div class="flex flex-col items-center">
                <QuestionCard v-for="q in questions" :question="q" />
            </div>
        </div>
    </div>
</template>