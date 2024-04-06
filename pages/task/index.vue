<script setup>
    import '~/assets/css/Titles.css';
    import '~/assets/css/Link.css';

</script>

<template>
    <p class="title">Задания</p>

    <NuxtLink to="/task/add" class="mx-auto my-4 link">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
        <p class="ml-3">Добавить</p>
    </NuxtLink>
</template>