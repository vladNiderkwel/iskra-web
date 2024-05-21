<script setup>
import axios from 'axios';
import Title from '~/components/Title.vue';
import TiptapEditor from '~/components/TiptapEditor.vue'

const config = useRuntimeConfig()
const title = ref("")
const description = ref("")
const body = ref("")
const photo = ref({
    file: null,
    url: `${config.public.baseUrl}/images/posts/post_placeholder.jpg`
})

const fetch = ref()

const addPost = async () => {

    if (
        title.value.trim().length === 0 ||
        description.value.trim().length === 0
    ) return;

    let form = new FormData()
    if (photo.value.file != null) form.append("photo", photo.value.file)
    form.append("title", title.value)
    form.append("description", description.value)
    form.append("body", body.value)
    form.append("publicationDate", new Date().toJSON())
    form.append("author", 1)

    axios.post(
        `${config.public.baseUrl}/post`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then((response) => {
            navigateTo(`/post/${response.data}`)
        })

    title.value = ""
    description.value = ""
    body.value = ""
    photo.value.file = null
    photo.value.url = `${config.public.baseUrl}/images/posts/post_placeholder.jpg`
}

const onFileChange = (e) => {
    photo.value.file = e.target.files[0];
    photo.value.url = URL.createObjectURL(e.target.files[0]);
}
</script>

<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-auto">
        <Title text="Добавить пост" />

        <div class="w-fit mx-auto">
            <p class="font-bold mb-1 text-2xl">Заголовок</p>
            <input v-model="title" type="text" maxlength="255" placeholder="Заголовок" class="w-full mb-5 text-input" />

            <p class="font-bold mb-1 text-2xl">Описание</p>
            <textarea class="w-full mb-4 text-input max-h-52" maxlength="255" v-model="description"></textarea>

            <p class="font-bold mb-1 text-2xl">Баннер</p>
            <input type="file" id="file" @change="onFileChange" accept="image/png, image/jpg, image/jpeg"
                class="hidden" />
            <label for="file" class="w-full button-green-filled">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                </svg>
                <p class="ml-3">Выбрать файл</p>
            </label>
            <img class="w-full h-56 rounded-2xl mt-2 object-cover" v-if="photo.url" :src="photo.url">

            <p class="font-bold mb-1 mt-5 text-2xl">Содержимое</p>
            <TiptapEditor v-model="body" class="mb-5" />

            <ButtonFilledPrimary @click="addPost" text="Добавить" />

            <p>{{ fetch }}</p>
        </div>
    </div>
</template>

<style scoped>
@import '~/assets/css/Input.css';
@import '~/assets/css/Button.css';
</style>