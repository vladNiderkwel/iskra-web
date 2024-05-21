<script setup>
definePageMeta({
  layout: "nosidebar",
});

const config = useRuntimeConfig()

const email = ref('')
const password = ref('')

const staffEmail = useCookie('staffEmail')
const staffRole = useCookie('staffRole')
const staffBlocked = useCookie('staffBlocked')
const staffPasswordChanged = useCookie('staffPasswordChanged')

const loginFetch = ref({
  data: null,
  pending: false,
  error: false,
})

const login = async () => {
  loginFetch.value = await useFetch(`${config.public.baseUrl}/staff/login`, {
    method: "post",
    body: {
      email: email.value.trim(),
      password: password.value
    }
  })
}

watch(loginFetch, (value) => {
  if (value.data != null) {
    staffEmail.value = value.data.email
    staffRole.value = value.data.role
    staffBlocked.value = value.data.isBlocked
    staffPasswordChanged.value = value.data.isPasswordChanged

    navigateTo("/")
  }
})
</script>

<template>
  <div class="flex justify-between flex-col h-full">
    <form class="mx-auto flex flex-col items-center w-auto my-auto" @submit.prevent="login">

      <Title text="Вход в систему" />

      <div class="mt-8 flex w-full">
        <svg class="mr-3 my-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
        </svg>
        <input type="email" v-model="email" placeholder="Почта" required class="text-input w-full">
      </div>

      <div class="mt-4 flex w-full">
        <svg class="mr-3 my-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" />
        </svg>
        <input type="password" v-model="password" placeholder="Пароль" required class="text-input w-full">
      </div>

      <input type="submit" value="Войти" class="mt-8 ml-auto button-green-filled">

      <ButtonTonal text="Впервые входите в аккаунт?" @click="navigateTo('/signup')" class="mx-auto my-4" />

      <ErrorLabel message="Подобного пользователя нет" class="mx-auto mt-4"
        v-if="loginFetch.error && loginFetch.error.statusCode == 404" />

      <ErrorLabel message="Неверный email или пароль" class="mx-auto mt-4"
        v-else-if="loginFetch.error && loginFetch.error.statusCode == 401" />

      <LoadingIndicator v-else-if="loginFetch.pending == true" />
    </form>

    <div class="flex mx-auto w-fit h-fit cookie rounded-full my-10">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path
          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-81 33.5-157.5t93-134.5Q266-830 348-860t180-18q15 2 23 12.5t9 28.5q2 64 47.5 109.5T716-680q21 1 32 12t12 34q2 42 25.5 69t65.5 41q14 5 21.5 14.5T880-486q2 83-29 157t-85 129.5Q712-144 638-112T480-80Zm0-80q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Zm-60-76q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320Z" />
      </svg>
      <p class="my-auto ml-3">Этот сайт использует куки для работы</p>
    </div>
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

.cookie {
  background: var(--iskra-color-surface-variant);
  padding: 8px 16px;
  fill: var(--iskra-color-on-surface-variant);
  color: var(--iskra-color-on-surface-variant);
}
</style>