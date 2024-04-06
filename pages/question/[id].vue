<script setup>

    const question = ref(
        {
            id: 1,
            question: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
            date: "01.01.2000",
            author: {
                name: "Василек Василек"
            }
        }
    )

</script>

<template>
    <p class="title">Вопрос пользователя</p>

    <div class="flex mb-4">
        <img class="mr-3 !my-auto rounded-full w-12 h-12" src="~assets/images/photo_placeholder.png"/>
        <NuxtLink to="/" class="author">{{ question.author.name }}</NuxtLink>
    </div>
    <p class="w-full h-fit mb-4">{{ question.question }}</p>
    
    <input placeholder="Ответ" type="text" />
    <a to="/post/add" class="mx-auto link">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
        <p class="ml-3">Сохранить ответ</p>
    </a>
</template>