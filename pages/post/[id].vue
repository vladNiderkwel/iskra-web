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

</script>

<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-auto">
        <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
            </svg>
        </ButtonTonal>

        <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

        <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

        <div v-else class="mt-4">
            <img v-if="data.photoUrl.length < 64" src="~assets/images/pattern_2.png"
                class="w-full object-cover h-60 rounded-2xl" />
            <img v-else :src="`${config.public.baseUrl}/images/posts/${data.photoUrl}.jpg`"
                class="w-full object-cover h-60 rounded-2xl">

            <LoadingIndicator v-if="deleting.pending" class="ml-auto !w-9 !h-9 my-4" />

            <ButtonFilledSecondary v-else text="Удалить" @click="deletePost()" class="ml-auto my-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </ButtonFilledSecondary>

            <div class="p-4">
                <div class="flex justify-between">
                    <p class="w-fit">{{ data.author.name }}</p>

                    <p class="w-fit">{{ getDateString(data.publicationDate) }}</p>
                </div>

                <p class="font-bold text-4xl w-full mt-2 text-center">{{ data.title }}</p>

                <div class="flex mx-auto w-fit mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                    <p class="w-fit ml-3 my-auto">{{ data.views }}</p>
                </div>

                <p class="description w-full text-justify mt-2">{{ data.description }}</p>

                <HorizontalDivider class="my-8" />
                <div class="max-w-full text-lg [&>p]:text-justify [&>h1]:mt-4 [&>h1]:mb-2 [&>h2]:mt-2 [&>h2]:mb-1 [&>p]:indent-12"
                    style="overflow-wrap: anywhere;" v-html="data.body"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Input.css';
</style>