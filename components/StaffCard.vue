<script setup>
const { staff } = defineProps(['staff'])
</script>

<template>
    <div class="flex rounded-full w-full">
        <p class="text-lg my-auto font-bold">{{ staff.name }}</p>
        <p class="text-lg ml-auto my-auto">{{ staff.email }}</p>

        <p v-if="staff.role === 0" class="text-lg ml-auto my-auto">Тьютор</p>
        <p v-if="staff.role === 1" class="text-lg ml-auto my-auto">Админ</p>
    </div>
</template>

<style scoped>
    div {
        min-width: 400px;
    }
</style>