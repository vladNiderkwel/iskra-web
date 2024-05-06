<script setup>
import ButtonTonal from '~/components/ButtonTonal.vue';

const isAddSectionMenuVisible = ref(false)

const toggleAddingSectionMenu = () =>
    isAddSectionMenuVisible.value = !isAddSectionMenuVisible.value

const newTask = ref(
    {
        id: -1,
        title: "",
        reward: 0,
        tasks: []
    }
)

const newSubtask = ref(
    {
        id: -1,
        question: "",
        type: 2,
        options: [],
    }
)

const option = ref({
    text: "",
    isAnswer: false
})

const addSection = () => {
    if (newSubtask.value.options.length > 0) {

        let ar = newSubtask.value.options.filter(opt => opt.isAnswer)

        if (ar.length === 0) return;
    }

    let q = newSubtask.value.question.trim()

    if (q.length === 0) return;

    newTask.value.tasks.push({
        id: Math.ceil(Math.random() * 1000000),
        question: q,
        type: newSubtask.value.type,
        options: newSubtask.value.options,
    })

    newSubtask.value.question = ""
    newSubtask.value.type = 2
    newSubtask.value.options = []

    clear()
    toggleAddingSectionMenu()
}

const deleteSection = (sectionId) => {
    newTask.value.tasks =
        newTask.value.tasks.filter(tsk => tsk.id != sectionId)
}

const addOption = () => {
    let str = option.value.text.trim()

    if (str.trim().length === 0) return;

    newSubtask.value.options.push(
        {
            id: Math.ceil(Math.random() * 1000000),
            text: str,
            isAnswer: option.value.isAnswer
        }
    )

    option.value.text = ""
    option.value.isAnswer = false
}

const deleteOption = (optionId) => {
    newSubtask.value.options =
        newSubtask.value.options.filter(opt => opt.id != optionId)
}

const clear = () => {
    option.value.text = ""
    option.value.isAnswer = false
    newSubtask.value.options = []
}

watch(() => newSubtask.value.options, (val) => {
    if (val.length < 1)
        newSubtask.value.type = 2
    else {
        let ar = val.filter(opt => opt.isAnswer)

        if (ar.length === 1) newSubtask.value.type = 1
        else if (ar.length > 1) newSubtask.value.type = 0
    }
}, { deep: true })

const config = useRuntimeConfig()

const fetch = ref({
    pending: false,
    status: null,
    error: false
})

const addTask = async () => {
    console.log(newTask.value.reward)

    await useFetch(`${config.public.baseUrl}/task`, {
        method: "post",
        body: {
            title: newTask.value.title,
            subtasks: newTask.value.tasks,
            available: true,
            reward: newTask.value.reward
        }
    })
}

watch(newTask.value.reward, (val) => {
    if (value > 1000) result.value = 1000
    if (value < 0) result.value = 0
}, { deep: true })

</script>

<template>
    <p class="title">Добавление задания</p>

    <div class="w-1/2 mx-auto mt-4">
        <p class="font-bold my-2 text-2xl">Название</p>
        <input v-model="newTask.title" type="text" maxlength="255" placeholder="Название" class="w-full text-input" />
    </div>

    <div class="w-1/2 mx-auto mt-4">
        <p class="font-bold my-2 text-2xl">Вознаграждение</p>
        <div class="flex">
            <input type="number" min="0" max="1000" v-model="newTask.reward" class="text-input" />
            <p class="ml-2 my-auto">опыта</p>
        </div>
    </div>

    <ButtonTonal @click="toggleAddingSectionMenu" text="Новое подзадание" class="mx-auto my-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    </ButtonTonal>

    <template v-if="newTask.tasks.length > 0">
        <div v-for="t in newTask.tasks" class="task-card mx-auto my-2">
            <p class="font-bold mb-1 text-xl">Тип</p>
            <div class="flex mb-4">
                <p v-if="t.type == 0" class="my-auto">Несколько возможных ответов</p>
                <p v-else-if="t.type == 1" class="my-auto">Единственный возможный ответ</p>
                <p v-else-if="t.type == 2" class="my-auto">Свой ответ</p>
            </div>

            <p class="font-bold mb-2 text-xl">Вопрос</p>
            <p class="mb-4">{{ t.question }}</p>

            <template v-if="t.type != 2">
                <p class="font-bold mb-2 text-xl">Варианты ответов</p>

                <template v-for="(opt, index) in t.options">
                    <div class="flex">
                        <p class="w-fit my-auto mr-4">{{ opt.text }}</p>
                        <p class="w-fit ml-auto rounded-2xl answer-badge">Ответ</p>
                    </div>

                    <HorizontalDivider v-if="index < t.options.length - 1" class="my-2" />
                </template>
            </template>

            <ButtonIcon @click="deleteSection(t.id)" class="ml-auto mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </ButtonIcon>
        </div>

        <ButtonFilledPrimary @click="addTask" text="Сохранить и добавить" class="mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
            </svg>
        </ButtonFilledPrimary>
    </template>

    <div v-if="isAddSectionMenuVisible" class="absolute flex left-0 top-0 w-full h-full add-background">
        <div class="block add-menu mx-auto my-auto rounded-2xl h-auto p-4">
            <ButtonIcon @click="toggleAddingSectionMenu" class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </ButtonIcon>

            <p v-if="newSubtask.type == 0" class="mb-2 text-center w-full text-xl">
                Вопрос с несколькими возможными ответами
            </p>
            <p v-if="newSubtask.type == 1" class="mb-2 text-center w-full text-xl">
                Вопрос с единственным возможным ответом
            </p>
            <p v-if="newSubtask.type == 2" class="mb-2 text-center w-full text-xl">
                Вопрос со своим ответом
            </p>

            <p class="font-bold mb-1 text-2xl">Вопрос</p>
            <textarea class="w-full mb-4 text-input" maxlength="255" v-model="newSubtask.question"></textarea>

            <p class="font-bold mb-1 text-2xl">Возможные ответы</p>

            <div class="flex mb-4">
                <ButtonIcon @click="addOption" class="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                </ButtonIcon>

                <input type="text" v-model="option.text" class="w-full text-input" placeholder="Пример ответа" />
                <label class="chip ml-2 my-auto">
                    <input type="checkbox" v-model="option.isAnswer" id="is-answer-check" class="appearance-none">
                    <span>Ответ</span>
                </label>
            </div>

            <template v-for="(opt, index) in newSubtask.options">
                <div class="flex option max-w-full">
                    <p class="my-auto w-full mr-4 break-words">{{ opt.text }}</p>
                    <p v-if="opt.isAnswer" class="my-auto rounded-2xl mr-4 answer-badge">Ответ</p>
                    <ButtonIcon @click="deleteOption(opt.id)" class="ml-auto my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </ButtonIcon>
                </div>
                <HorizontalDivider v-if="index < newSubtask.options.length - 1" class="my-3" />
            </template>

            <ButtonFilledSecondary text="Добавить" @click="addSection()" class="mt-8 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
            </ButtonFilledSecondary>
        </div>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Input.css";

.task-card {
    border-radius: 8px;
    padding: 16px;
    width: 50%;
    min-width: 500px;
    transition: all 0.4s;
    background: var(--iskra-color-surface-variant);
}

.task-card:hover {
    border-radius: 36px;
}

.add-background {
    background: rgba(0, 0, 0, 0.668);
}

.add-menu {
    width: 50%;
    min-width: 400px;
    background: var(--iskra-color-surface);
}

.add-menu textarea {
    min-height: 64px;
    max-height: 200px;
}

.add-menu .option p {
    max-width: 90%;
}

.chip span {
    padding: 8px 16px;
    border-radius: 32px;
    border: solid var(--iskra-color-outline) 1px;
    background: var(--iskra-color-surface);
    transition: all 0.2s;
}

.chip span:hover {
    cursor: pointer;
    background: var(--iskra-color-surface-variant);
}

.chip #is-answer-check:checked+span {
    width: full;
    height: full;
    color: var(--iskra-color-black);
    border: solid var(--iskra-color-green) 1px;
    background: var(--iskra-color-green);
}

.answer-badge {
    height: fit-content;
    width: fit-content;
    padding: 2px 8px;
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}
</style>