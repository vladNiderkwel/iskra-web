<script>
  import '~/assets/css/Navigation.css'
</script>

<template>
    <div class="flex h-full">
 
      <ul class="w-fit list-none bg-iskra-milk" id="nav">
        <li ><NuxtLink class="w-full" to="/"><img id="nav-logo" src="~assets/images/ic_spark.svg"></NuxtLink></li>

        <li class="nav-chip"><NuxtLink class="w-full" to="/login">Войти</NuxtLink></li>
        <li class="nav-chip"><NuxtLink class="w-full" to="/register">Создать аккаунт</NuxtLink></li>
      </ul>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
</template>