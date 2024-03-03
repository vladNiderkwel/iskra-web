<script setup>
  import '~/assets/css/Form.css'

  const email = ref('');
  const password = ref('');

  const login = async () => {
    console.log(email.value)
    console.log(password.value)
    await navigateTo("")
  }
</script>

<template>
  <form class="m-auto p-4 w-fit h-fit" @submit.prevent="login">
    <p class="form-title">Вход в систему</p>
    <div>
      <img src="~assets/images/email.svg" class="mr-3">
      <input type="email" v-model="email" placeholder="Почта" required>
    </div>

    <div>
      <img src="~assets/images/password.svg" class="mr-3">
      <input type="password" v-model="password" placeholder="Пароль" required>
    </div>
    
    <div>
      <input type="submit" value="Войти" class="m-auto">
    </div>
  </form>
</template>