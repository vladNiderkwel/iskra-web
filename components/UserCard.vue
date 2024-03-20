<script setup>
    import '~/assets/css/UserCard.css'
    
    const { user } = defineProps(['user'])
</script>

<template>
    <div class="user-card flex mx-auto my-2">
        <img class="mr-3" src="~assets/images/photo_placeholder.png"/>
        <p class="my-auto font-bold mr-3">{{ user.name }}</p>

        <a :href="'mailto:' + user.email" class="my-auto">{{ user.email }}</a>
    </div>
</template>