<script setup>
    import '~/assets/css/ServiceCard.css';

    const { service } = defineProps(['service'])

    const activate = () => {
        console.log("Активировано " + service.name)
    }

    const disactivate = () => {
        console.log("Приостановлено " + service.name)
    }

</script>

<template>
    <div class="service-card mt-5">
        <p class="name my-auto">{{ service.name }}</p>

        <p v-if="service.isActive" class="ml-5 active my-auto">Активно</p>
        <p v-else class="ml-5 unactive my-auto">Приостановлено</p>

        <a v-if="service.isActive" @click="disactivate" class="link ml-auto my-auto">Приостановить</a>
        <a v-else @click="activate" class="link ml-auto my-auto">Возобновить</a>
    </div>
</template>