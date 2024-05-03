<script setup>
const { user } = defineProps(['user'])
</script>

<template>
    <div class="flex rounded-full w-full">
        <img class="h-8 w-8 rounded-full mr-2" src="~assets/images/photo_placeholder.png"/>
        <p class="text-lg my-auto">{{ user.name }}</p>
        <p class="text-lg ml-auto my-auto">{{ user.email }}</p>
        
    </div>
</template>

<style scoped>
    div {
        min-width: 400px;
    }
</style>