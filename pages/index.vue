<script setup>
import Title from '~/components/Title.vue';

const staffRole = useCookie('staffRole')

const getRoleName = (role) => {
  let roleName = ""

  switch (role) {
    case 0:
    roleName = "Тьютор";
      break;
    case 1:
    roleName = "Администратор";
      break;
    default:
      break;
  }

  return roleName
}

</script>

<template>
  <div class="w-full h-full max-h-full p-2 overflow-y-scroll">

    <div class="menu my-auto h-fit">
      <Title :text="`Вы вошли как ${getRoleName(staffRole)}`" class="mb-8" />

      <div class="flex mt-auto">
        <p class="font-bold text-xl my-auto">Карта</p>
        <ButtonTonal text="Карта" @click="navigateTo('/map')" class="w-fit h-fit ml-auto" />
      </div>

      <HorizontalDivider class="my-4" />

      <div class="flex">
        <p class="font-bold text-xl my-auto">Задания</p>
        <ButtonTonal text="Проверить" @click="navigateTo('/task/check')" class="w-fit h-fit ml-auto" />
        <ButtonTonal text="Создать" @click="navigateTo('/task/add')" class="w-fit h-fit ml-3" />
        <ButtonTonal text="Все" @click="navigateTo('/task')" class="w-fit h-fit ml-3" />
      </div>

      <HorizontalDivider class="my-4" />

      <div class="flex">
        <p class="font-bold text-xl my-auto">Мероприятия</p>
        <ButtonTonal text="Все" @click="navigateTo('/event')" class="w-fit h-fit ml-auto" />
      </div>

      <HorizontalDivider class="my-4" />

      <div class="flex">
        <p class="font-bold text-xl my-auto">Посты</p>
        <ButtonTonal text="Создать" @click="navigateTo('/post/add')" class="w-fit h-fit ml-auto" />
        <ButtonTonal text="Все" @click="navigateTo('/post')" class="w-fit h-fit ml-3" />
      </div>

      <HorizontalDivider class="my-4" />

      <div class="flex">
        <p class="font-bold text-xl my-auto">Вопросы</p>
        <ButtonTonal text="Все" @click="navigateTo('/question')" class="w-fit h-fit ml-auto" />
      </div>

      <!--
      <HorizontalDivider class="my-4" />

      <div class="flex">
        <p class="font-bold text-xl my-auto">Сервисы</p>
        <ButtonTonal text="Все" @click="navigateTo('/service')" class="w-fit h-fit ml-auto" />
      </div>
      -->

      <HorizontalDivider class="my-4" v-if="staffRole == '1'" />

      <div class="flex" v-if="staffRole == '1'">
        <p class="font-bold text-xl my-auto">Пользователи</p>
        <ButtonTonal text="Зарегистрировать сотрудника" @click="navigateTo('/user/staff/new')" class="ml-auto" />
        <ButtonTonal text="Сотрудники" @click="navigateTo('/user/staff')" class="ml-3" />
        <ButtonTonal text="Все" @click="navigateTo('/user')" class="ml-3" />
      </div>
  </div>
  </div>
</template>

<style scoped>
.menu {
  width: 50%;
  min-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>