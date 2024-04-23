<script setup>
import ButtonTonal from '~/components/ButtonTonal.vue';


const isAddSectionMenuVisible = ref(false)
const isAddTypeSelectMenuVisible = ref(false)
const isAddOptionsMenuVisible = ref(false)

const closeAddSectionMenu = () => {
    isAddSectionMenuVisible.value = false
    isAddTypeSelectMenuVisible.value = false
    isAddOptionsMenuVisible.value = false
}

const openAddSectionMenu = () => {
    isAddSectionMenuVisible.value = true
    isAddTypeSelectMenuVisible.value = true
    isAddOptionsMenuVisible.value = false
}

const moveToAddOptionScreen = () => {
    isAddTypeSelectMenuVisible.value = false
    isAddOptionsMenuVisible.value = true
}


const newTask = ref(
    {
        id: -1,
        tasks: []
    }
)

const newSection = ref(
    {
        id: -1,
        question: "",
        type: 0,
        options: [],
    }
)

const option = ref({
    text: "",
    isAnswer: false
})

const addSection = () => {
    let q = newSection.value.question.trim()

    if (q.length === 0 || (newSection.value.options.length == 0 && newSection.value.type != 2)) return;

    newTask.value.tasks.push({
        id: Math.ceil(Math.random() * 1000000),
        question: q,
        type: newSection.value.type,
        options: newSection.value.options,
    })

    newSection.value.question = ""
    newSection.value.type = 0
    newSection.value.options = []

    closeAddSectionMenu()
}

const deleteSection = (sectionId) => {
    newTask.value.tasks =
        newTask.value.tasks.filter(tsk => tsk.id != sectionId)
}

const addOption = () => {
    let str = option.value.text.trim()

    if (str.trim().length === 0) return;

    newSection.value.options.push(
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
    newSection.value.options =
        newSection.value.options.filter(opt => opt.id != optionId)
}

const clear = () => {
    option.value.text = ""
    option.value.isAnswer = false
    newSection.value.options = []
}

</script>

<template>
    <p class="title">Добавление заданий</p>

    <a @click="openAddSectionMenu" class="mx-auto my-4 button-green-tonal">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <p class="ml-3">Новое задание</p>
    </a>

    <template v-if="newTask.tasks.length > 0">
        <div v-for="t in newTask.tasks" class="task-card mx-auto my-2">
            <p class="font-bold mb-1 text-xl">Тип</p>
            <div class="flex mb-4">
                <p v-if="t.type == 0" class="my-auto">Несколько возможных ответов</p>
                <p v-else-if="t.type == 1" class="my-auto">Единственный возможный ответ</p>
                <p v-else-if="t.type == 2" class="my-auto">Свой ответ</p>
            </div>

            <p class="font-bold mb-1 text-xl">Вопрос</p>
            <p class="mb-4">{{ t.question }}</p>

            <template v-if="t.type != 2">
                <p class="font-bold mb-1 text-xl">Возможные ответы</p>

                <template v-for="(opt, index) in t.options">
                    <div class="flex">
                        <p class="w-fit my-auto">{{ opt.text }}</p>
                        <p class="w-fit ml-2 rounded-2xl answer-badge">Ответ</p>
                    </div>

                    <HorizontalDivider v-if="index < t.options.length - 1" class="my-2" />
                </template>
            </template>

            <a @click="deleteSection(t.id)" class="ml-auto w-fit h-fit button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </a>
        </div>

        <a @click="openAddSectionMenu" class="mx-auto my-4 button-green-filled">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
            </svg>
            <p class="ml-3">Сохранить и добавить</p>
        </a>
    </template>

    <div v-if="isAddSectionMenuVisible" class="absolute flex left-0 top-0 w-full h-full add-background">
        <div v-if="isAddTypeSelectMenuVisible" class="block add-menu mx-auto my-auto rounded-2xl h-auto p-3">
            <a @click="closeAddSectionMenu" class="ml-auto button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </a>

            <p class="font-bold mb-1 text-2xl">Тип</p>
            <select v-model="newSection.type" class="mb-4 w-full text-input">
                <option value="0">Несколько возможных ответов</option>
                <option value="1">Единственный возможный ответ</option>
                <option value="2">Свой ответ</option>
            </select>

            <a @click="moveToAddOptionScreen" class="ml-auto mt-4 w-fit h-fit button-green-tonal">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <p class="ml-3">Продолжить</p>
            </a>
        </div>

        <div v-if="isAddOptionsMenuVisible" class="block add-menu mx-auto my-auto rounded-2xl h-auto p-3">
            <ButtonIcon @click="closeAddSectionMenu" class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </ButtonIcon>

            <p class="font-bold mb-1 text-2xl">Вопрос</p>
            <textarea class="w-full mb-4 text-input" maxlength="255" v-model="newSection.question"></textarea>

            <template v-if="newSection.type != 2">
                <p class="font-bold mb-1 text-2xl">Возможные ответы</p>

                <div class="flex mb-4">
                    <input type="text" v-model="option.text" class="w-full text-input" placeholder="Пример ответа" />
                    <label class="chip ml-2 mr-5 my-auto">
                        <input type="checkbox" v-model="option.isAnswer" id="is-answer-check" class="appearance-none">
                        <span>Ответ</span>
                    </label>
                    <ButtonIcon @click="addOption">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>
                    </ButtonIcon>
                </div>
            </template>

            <template v-for="(opt, index) in newSection.options">
                <div class="flex option max-w-full">
                    <p class="my-auto mr-auto break-words">{{ opt.text }}</p>
                    <p v-if="opt.isAnswer" class="my-auto mr-auto break-words">это ответ</p>
                    <ButtonIcon @click="deleteOption(opt.id)" class="ml-auto my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </ButtonIcon>
                </div>
                <HorizontalDivider v-if="index < newSection.options.length - 1" class="my-2" />
            </template>

            <div class="flex mt-8">
                <ButtonIcon @click="deleteOption(opt.id)" class="ml-auto my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </ButtonIcon>
                <ButtonOutlineSecondary text="Назад" @click="openAddSectionMenu(); clear();" class="mr-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </ButtonOutlineSecondary>

                <ButtonTonal text="Добавить" @click="addSection(); clear();" class="mr-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                </ButtonTonal>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "~/assets/css/Titles.css";
@import "~/assets/css/Input.css";
@import "~/assets/css/Button.css";

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
    border: solid var(--iskra-color-green) 1px;
    background: var(--iskra-color-green);
}

.answer-badge {
    padding: 2px 8px;
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}
</style>