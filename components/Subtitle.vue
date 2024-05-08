<script setup>
    const { text } = defineProps(['text'])
</script>

<template>
    <h2 class="w-fit mx-auto">{{ text }}</h2>
</template>