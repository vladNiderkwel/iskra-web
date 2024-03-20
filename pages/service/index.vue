<script setup>
    import '~/assets/css/Titles.css';
    import ServiceCard from '~/components/ServiceCard.vue';

    const services = ref([
        {
            name: "События",
            isActive: true 
        },
        {
            name: "Задания",
            isActive: false 
        },
        {
            name: "Вопросы",
            isActive: true
        },
    ])

</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full h-full p-4 overflow-y-scroll">
            <p class="title">Модули</p>
            
            <div>
                <ServiceCard v-for="s in services" :service="s" class="mx-auto" />
            </div>
        </div>
    </div>
</template>