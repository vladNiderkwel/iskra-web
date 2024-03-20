<script setup>
    import TiptapEditor from '~/components/TiptapEditor.vue'
    import '~/assets/css/AddPost.css'

    const content = ref("")

    const click = () => {
        console.log(content.value)
    }

</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full h-full px-2 py-4 overflow-y-scroll">
            <p class="title mb-4">Добавить пость</p>
            <div class="w-fit mx-auto">
                <TiptapEditor v-model="content" class="mb-4"/>
                <NuxtLink @click="click" class="link mr-auto">Добавить</NuxtLink>
            </div>
        </div>
    </div>
</template>