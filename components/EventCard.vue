<script setup>
    const { event } = defineProps(['event'])

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ]
    
    const splitStartDate = event.startDate.split(".")

    if(splitStartDate[0].length == 2 && splitStartDate[0].charAt(0) == '0')
        splitStartDate[0] = splitStartDate[0].charAt(1)

    if(splitStartDate[1].length == 2 && splitStartDate[1].charAt(0) == '0')
        splitStartDate[1] = splitStartDate[1].charAt(1)

    const splitEndDate = event.startDate.split(".")

    if(splitEndDate[0].length == 2 && splitEndDate[0].charAt(0) == '0')
        splitEndDate[0] = splitEndDate[0].charAt(1)

    if(splitEndDate[1].length == 2 && splitEndDate[1].charAt(0) == '0')
        splitEndDate[1] = splitEndDate[1].charAt(1)

    let displayingDate = 
        `С ${splitStartDate[0]} ${months[splitStartDate[1]]} ${splitStartDate[2]} по ${splitEndDate[0]} ${months[splitEndDate[1]]}  ${splitEndDate[2]}`

</script>

<template>
    <div class="event-card mt-2">
        <div class="flex self-center">
            <img class="mr-3" src="~assets/images/photo_placeholder.png"/>
            <div>
                <NuxtLink to="/" class="author">{{ event.author.name }}</NuxtLink>
                <p class="date">{{ displayingDate }}</p>
            </div>
            <NuxtLink to="/" class="link ml-auto mt-auto">Подробнее</NuxtLink>
        </div>
        <div class="flex my-4">
            <p class="font-bold">{{ event.title }}</p>
            <p class="ml-4">{{ event.members.length }} участников</p>
        </div>
        <p class="content">{{ event.description }}</p>
    </div>
</template>

<style scoped>
    @import '~/assets/css/EventCard.css';
    @import '~/assets/css/Link.css';
</style>