<script setup>
  const email = ref('');
  const password = ref('');

  const login = async () => {
    console.log(email.value)
    console.log(password.value)
    await navigateTo("/")
  }
</script>

<template>
  <form class="mx-auto mt-16 flex flex-col items-center w-auto" @submit.prevent="login">
    <p class="title">Вход в систему</p>

    <div class="mt-8 flex w-full">
      <svg class="mr-3 my-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
      </svg>
      <input type="email" v-model="email" placeholder="Почта" required class="text-input w-full">
    </div>

    <div class="mt-4 flex w-full">
      <svg class="mr-3 my-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"/>
      </svg>
      <input type="password" v-model="password" placeholder="Пароль" required class="text-input w-full">
    </div>
    
    <input type="submit" value="Войти" class="mt-8 ml-auto button-green-filled">
  </form>
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