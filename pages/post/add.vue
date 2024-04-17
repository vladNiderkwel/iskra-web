<script setup>
import TiptapEditor from '~/components/TiptapEditor.vue'

const content = ref("")
const imgUrl = ref(null)

const addPost = () => {
    console.log(content.value)
}

const onFileChange = (e) => {
    const file = e.target.files[0];
    imgUrl.value = URL.createObjectURL(file);
    console.log(imgUrl)
}

</script>

<template>
    <p class="title mb-4">Добавить пост</p>

    <div class="w-fit mx-auto">
        <p class="font-bold mb-1 text-2xl">Заголовок</p>
        <input type="text" maxlength="255" placeholder="Заголовок" class="w-full mb-5 text-input" />

        <p class="font-bold mb-1 text-2xl">Баннер</p>
        <input type="file" id="file" @change="onFileChange" accept="image/png, image/jpg, image/jpeg" class="hidden" />
        <label for="file" class="w-full button-green-filled">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
            </svg>
            <p class="ml-3">Выбрать файл</p>
        </label>
        <img class="w-full h-56 rounded-2xl mt-2 object-cover" v-if="imgUrl" :src="imgUrl">

        <p class="font-bold mb-1 mt-5 text-2xl">Содержимое</p>
        <TiptapEditor v-model="content" class="mb-5" />

        <NuxtLink @click="addPost" class="button-green-filled ml-auto">Добавить</NuxtLink>
    </div>
</template>

<style scoped>
@import '~/assets/css/Input.css';
@import '~/assets/css/Button.css';
</style>