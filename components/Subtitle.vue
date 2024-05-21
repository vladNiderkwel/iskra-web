<script setup>
    const { text } = defineProps(['text'])
</script>

<template>
    <h2 class="w-fit mx-auto min-w-max">{{ text }}</h2>
</template>