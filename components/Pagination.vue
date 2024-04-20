<script setup>
const { totalPages } = defineProps(["totalPages"])

const modelValue = defineModel()

const updateValue = (value) => modelValue.value = value
</script>

<template>
    <div class="flex justify-center items-center">
        <a v-if="modelValue >= 2" class="mr-4" @click="updateValue(modelValue - 1)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
        </a>

        <a v-for="page in totalPages" @click="updateValue(page)"
            class="mx-1" :class="{ 'active-page': page == modelValue }">
            <p>{{ page }}</p>
        </a>

        <a v-if="modelValue < totalPages" class="ml-4" @click="updateValue(modelValue + 1)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
        </a>
    </div>
</template>

<style scoped>
a {
    border-radius: 32px;
    padding: 8px 16px;
    border: solid var(--iskra-color-surface-variant) 1px;
    transition: all 0.4s;

    color: var(--iskra-color-on-surface);
    fill: var(--iskra-color-on-surface);
}

a:hover {
    background: var(--iskra-color-surface-variant);
    cursor: pointer;
    border-radius: 8px;
}

.active-page, .active-page:hover {
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}
</style>