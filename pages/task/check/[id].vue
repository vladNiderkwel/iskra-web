<script setup>
import axios from 'axios';
import Badge from '~/components/Badge.vue';

const config = useRuntimeConfig()

const id = useRoute().params.id

const { data, error, pending, refresh } = await useAsyncData(`user-task-${id}`,
    () => $fetch(`${config.public.baseUrl}/user-task/${id}`)
)

const isUserAnswer = (allUserAnswers, subtask, option) => {
    let userAnswer = allUserAnswers.find(answer => answer.subtask.id === subtask.id)
    return userAnswer.answers.filter(opt => opt.id === option.id).length > 0
}

const getWrittenAnswer = (allUserAnswers, subtask) => {
    return allUserAnswers.find(answer => answer.subtask.id === subtask.id).writtenAnswer
}

const result = ref(0)

const saveCheck = async () => {

    if (data.value.result > 10) data.value.result = 10
    if (data.value.result < 0) data.value.result = 0

    await axios.put(`${config.public.baseUrl}/user-task/`, data.value)
        .then(navigateTo("/task/check/"))
}

watch(result, (value) => {
    if (value > 10) result.value = 10
    if (value < 0) result.value = 0
})
</script>


<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-scroll">
        <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
            </svg>
        </ButtonTonal>

        <div class="mx-auto content">
            <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

            <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

            <template v-else>
                <div class="flex self-center mt-4 ml-auto w-fit">
                    <img v-if="data.user.photoUrl.length < 64" class="h-8 w-8 rounded-full mr-2 my-auto"
                        src="~assets/images/photo_placeholder.png" />
                    <img v-else class="h-8 w-8 rounded-full mr-2 my-auto"
                        :src="`${config.public.baseUrl}/images/photos/${data.user.photoUrl}.jpg`" />
                    <p class="my-auto">{{ data.user.name }}</p>
                </div>

                <p class="font-bold text-xl text-center">{{ data.task.title }}</p>
                <div v-for="answer in data.answers" class="my-2 subtask">

                    <p class="mt-2 text-lg font-bold">{{ answer.subtask.question }}</p>

                    <p v-if="answer.subtask.type == 0" class="my-auto italic mt-2">Несколько возможных ответов</p>
                    <p v-else-if="answer.subtask.type == 1" class="my-auto italic mt-2">Единственный возможный ответ</p>
                    <p v-else-if="answer.subtask.type == 2" class="my-auto italic mt-2">Свой ответ</p>

                    <template v-for="(option, index) in answer.subtask.options">
                        <div class="flex px-4 py1 mt-2 w-full">
                            <p class="mr-4">{{ option.text }}</p>
                            <div class="ml-auto">
                                <Badge v-if="isUserAnswer(data.answers, answer.subtask, option)"
                                    text="Ответ пользователя" class="ml-2" />
                                <Badge v-if="option.isAnswer" text="Ответ" class="ml-2" />
                            </div>
                        </div>
                        <HorizontalDivider class="my-2" v-if="index < answer.subtask.options.length - 1" />
                    </template>

                    <p v-if="answer.subtask.type == 2">{{ answer.writtenAnswer }}</p>
                </div>

                <div class="flex mt-5">
                    <p class="mr-2 my-auto font-bold">Оценка</p>
                    <input type="number" min="0" max="10" v-model="data.result" class="text-input" />
                    <p class="ml-2 my-auto">из 10</p>

                    <ButtonFilledPrimary text="Сохранить" @click="saveCheck()" class="ml-auto" />
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
@import "~/assets/css/Input.css";

.user-answer {
    background: var(--iskra-color-primary-container);
    border-radius: 16px;
}

.content {
    width: 50%;
    min-width: 400px;
}

.subtask {
    border-radius: 8px;
    padding: 16px;
    transition: all 0.4s;

    background: var(--iskra-color-surface-variant);
    color: var(--iskra-color-on-surface-variant);
    fill: var(--iskra-color-on-surface-variant);
    border: solid var(--iskra-color-outline) 1px;
}
</style>