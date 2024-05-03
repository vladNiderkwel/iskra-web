<script setup>
const config = useRuntimeConfig()

const id = useRoute().params.id

const { data, error, pending, refresh } = await useAsyncData(`task-${id}`,
    () => $fetch(`${config.public.baseUrl}/task/${id}`)
)

const deleting = ref({

})

const deleteTask = async () => {
    deleting.value = await useFetch(`${config.public.baseUrl}/task/delete/${id}`)
}

watch(deleting, (value) => {
    if (value.status === "success") navigateTo("/task")
})
</script>

<template>
    <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
                d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
        </svg>
    </ButtonTonal>

    <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

    <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

    <div v-else class="mt-4">
        <ErrorLabel v-if="!data.available" message="Задание было удалено" class="mx-auto" />
        <template v-else>
            <p class="text-2xl font-bold text-center">{{ data.title }}</p>
            <template v-for="subtask in data.subtasks">
                <div class="card mx-auto my-3">
                    <p class="font-bold text-xl">Вопрос</p>
                    <p>{{ subtask.question }}</p>

                    <template v-if="subtask.type != 2">
                        <p class="font-bold mt-3 text-xl">Варианты ответов</p>

                        <template v-for="(option, index) in subtask.options">
                            <div class="flex w-full">
                                <p>{{ option.text }}</p>
                                <Badge text="Ответ" v-if="option.isAnswer" class="ml-auto" />
                            </div>
                            <HorizontalDivider class="my-3" v-if="index < subtask.options.length - 1" />
                        </template>
                    </template>

                </div>
            </template>
        </template>

        <ButtonFilledSecondary v-if="data.available" text="Удалить" @click="deleteTask()" class="mx-auto mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </ButtonFilledSecondary>
    </div>
</template>

<style scoped>
.card {
    border-radius: 8px;
    padding: 16px;
    width: 50%;
    min-width: 500px;
    transition: all 0.4s;
    background: var(--iskra-color-surface-variant);
    color: var(--iskra-color-on-surface-variant);
    fill: var(--iskra-color-on-surface-variant);
    border: solid var(--iskra-color-outline) 1px;
}
</style>