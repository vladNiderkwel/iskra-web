<script setup>
import Title from '~/components/Title.vue';

const config = useRuntimeConfig()

const name = ref('')
const email = ref('')
const password = ref('')
const role = ref(0)

const newStaffFetch = ref({
    data: null,
    pending: false,
    error: false,
})

const register = async () => {

    if (newPassword.value != newPasswordConfirm.value) return

    newStaffFetch.value = await useFetch(`${config.public.baseUrl}/staff/new`, {
        method: "post",
        body: {
            name: name.value.trim(),
            email: email.value.trim(),
            role: role.value,
            password: password.value,
            isPasswordChanged: false
        }
    })
}
</script>

<template>
    <div class="flex justify-between flex-col h-full w-full max-h-full p-2">
        <form class="mx-auto flex flex-col items-center w-auto my-auto max-w-20" @submit.prevent="register">

            <Title text="Регистрация нового сотрудника" />

            <input type="text" v-model="name" placeholder="Имя" required 
                class="text-input mt-8 w-full" maxlength="255">

            <input type="email" v-model="email" placeholder="Почта" maxlength="255"
                required class="text-input mt-4 w-full">

            <input type="password" v-model="password" placeholder="Временный пароль" required 
                maxlength="255" class="text-input mt-4 w-full">

            <select v-model="role" class="text-input mt-4 w-full">
                <option value="0">Тьютор</option>
                <option value="1">Администратор</option>
            </select>

            <input type="submit" value="Зарегистрировать" class="mt-8 ml-auto button-green-filled">

            <LoadingIndicator v-if="newStaffFetch.pending == true" />
        </form>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Button.css";
@import "~/assets/css/Input.css";

form {
    max-width: 36%;
    min-width: 300px;
}
</style>