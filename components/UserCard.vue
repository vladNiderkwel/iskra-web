<script setup>    
    const { user } = defineProps(['user'])
</script>

<template>
    <div class="user-card flex mx-auto my-2">
        <img class="my-auto w-10 h-10 rounded-full " src="~assets/images/photo_placeholder.png"/>
        <p class="my-auto font-bold ml-auto mr-3">{{ user.name }}</p>
        <p class="my-auto ml-auto">{{ user.email }}</p>
    </div>
</template>

<style>
    .user-card {
        min-width: 500px;
        width: 50%;
        border-radius: 24px;
        padding: 8px 16px;
        transition: all 0.2s;
    }

    .user-card p {
        min-width: 100px;
    }

    .user-card:hover {
        background: var(--iskra-surface-variant);
    }
</style>