<script setup>
import HorizontalDivider from '~/components/HorizontalDivider.vue';

const config = useRuntimeConfig()

const id = useRoute().params.id

const { data, error, pending, refresh } = await useAsyncData(`post-${id}`,
    () => $fetch(`${config.public.baseUrl}/post/${id}`)
)

const deleting = ref({
    pending: false,
    error: false,
    status: null
})

const deletePost = async () => {
    deleting.value = await useFetch(
        `${config.public.baseUrl}/post/${id}`, {
        method: "delete"
    })
}

watch(deleting, (value) => {
    if (value.status === "success") navigateTo("/post")
})

//watch(data, (val) => console.log(data))

</script>

<template>

    <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
                d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
        </svg>
    </ButtonTonal>

    <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

    <ErrorLabel v-else-if="error || data === ''" class="mx-auto mt-4" />

    <div v-else class="mt-4">
        <img :src="`${config.public.baseUrl}/images/posts/${data.photoUrl}.jpg`"
            class="w-full object-cover h-60 mb-4 rounded-2xl">

        <LoadingIndicator v-if="deleting.pending" class="ml-auto my-auto !w-9 !h-9" />

        <ButtonFilledSecondary v-else text="Удалить" @click="deletePost()" class="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </ButtonFilledSecondary>

        <div class="mt-4 rounded-lg p-4" style="background: var(--iskra-color-surface-variant);">
            <p class="w-fit ml-auto">{{ getDateString(data.publicationDate) }}</p>

            <p class="font-bold text-4xl w-full mb-2 text-center">{{ data.title }}</p>

            <p class="description w-full text-justify mt-2">{{ data.description }}</p>

            <HorizontalDivider class="my-4" />
            <div class="max-w-full text-lg" style="overflow-wrap: anywhere;" v-html="data.body"></div>
        </div>
    </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Input.css';
</style>