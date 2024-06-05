<script setup>
const { service } = defineProps(['service'])
const config = useRuntimeConfig()

const name = ref("")

switch (service.id) {
    case 0:
        name.value = "Вопросы"
        break;
    case 1:
        name.value = "Задания"
        break;
    case 2:
        name.value = "События"
        break;
    case 3:
        name.value = "Карта"
        break;

}

const toogle = async () => {
    await useFetch(`${config.public.baseUrl}/service/toggle`, {
        method: 'get',
        mode: 'no-cors',
        params: {
            id: service.id
        },

    })
}
</script>

<template>
    <div class="w-min card my-5 flex">
        <div v-if="service.isActive" class="active-dot my-auto mr-4"></div>
        <div v-else class="unactive-dot my-auto mr-4"></div>

        <p class="name my-auto text-2xl font-bold">{{ name }}</p>

        <a v-if="service.isActive" @click="toogle" class="button-green-filled ml-auto">Приостановить</a>
        <a v-else @click="toogle" class="button-green-filled ml-auto">Возобновить</a>
    </div>
</template>

<style scoped>
@import '~/assets/css/Button.css';

.card {
    width: 640px;
    color: var(--iskra-color-background-container);
}

.active-dot {
    width: 10px;
    height: 10px;
    background: var(--iskra-color-green);
    border-radius: 9999px;
    animation: pulse 2s linear infinite;
}

.unactive-dot {
    width: 10px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    border-color: grey;
    border-radius: 9999px;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
    }

    50% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(0.8);
    }
}
</style>