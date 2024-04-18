<template>
  <div class="mx-auto menu mt-auto mb-auto">
    <div class="flex">
      <p class="font-bold text-xl my-auto">Сервисы</p>
      <a @click="navigateTo('/service')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Задания</p>
      <a @click="navigateTo('/task/add')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Создать</p>
      </a>
      <a @click="navigateTo('/task')" class="w-fit h-fit button-green-tonal ml-3">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Мероприятия</p>
      <a @click="navigateTo('/event')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Пользователи</p>
      <a @click="navigateTo('/user')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Посты</p>
      <a @click="navigateTo('/post/add')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Создать</p>
      </a>
      <a @click="navigateTo('/post')" class="w-fit h-fit button-green-tonal ml-3">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Вопросы</p>
      <a @click="navigateTo('/question')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Все</p>
      </a>
    </div>

    <HorizontalDivider class="my-4" />

    <div class="flex">
      <p class="font-bold text-xl my-auto">Карта</p>
      <a @click="navigateTo('/question')" class="w-fit h-fit button-green-tonal ml-auto">
        <p>Все</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@import "~/assets/css/Button.css";

.menu {
  width: 50%;
  min-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>