<script setup>
const config = useRuntimeConfig()
const { staff } = defineProps(['staff'])

const toggleBlock = async () => {
    await useFetch(`${config.public.baseUrl}/staff/block/${staff.id}`)
}
</script>

<template>
    <div class="flex rounded-full w-full">
        <p class="text-lg my-auto font-bold">{{ staff.name }}</p>
        <p class="text-lg ml-auto my-auto">{{ staff.email }}</p>

        <p v-if="staff.role === 0" class="text-lg mx-auto my-auto">Тьютор</p>
        <p v-if="staff.role === 1" class="text-lg mx-auto my-auto">Админ</p>

        <p v-if="staff.isPasswordChanged == false" class="text-lg my-auto" style="color: var(--iskra-color-error);">
            Не сменил пароль
        </p>

        <p v-if="staff.isBlocked == true" class="text-lg my-auto" style="color: var(--iskra-color-error);">
            Заблокирован
        </p>

        <ErrorButton @click="toggleBlock()" class="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/>
            </svg>
        </ErrorButton>
    </div>
</template>

<style scoped>
    div {
        min-width: 400px;
    }
</style>