<script setup>
    import '~/assets/css/QuestionCard.css'

    const { question } = defineProps(['question'])

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ]
    
    const splitDate = question.date.split(".")

    if(splitDate[0].length == 2 && splitDate[0].charAt(0) == '0')
        splitDate[0] = splitDate[0].charAt(1)

    if(splitDate[1].length == 2 && splitDate[1].charAt(0) == '0')
        splitDate[1] = splitDate[1].charAt(1)

</script>

<template>
    <div class="question-card mt-2">
        <div class="flex self-center">
            <img class="mr-3 !my-auto" src="~assets/images/photo_placeholder.png"/>
            <div class="my-auto">
                <NuxtLink to="/" class="author">{{ question.author.name }}</NuxtLink>
                <p class="date ">{{ `${splitDate[0]} ${months[splitDate[1]]}  ${splitDate[2]}` }}</p>
            </div>
            <NuxtLink to="/" class="link ml-auto mt-auto">Подробнее</NuxtLink>
        </div>
        <p class="mt-4 content">{{ question.question }}</p>
    </div>
</template>

<style scoped>

</style>