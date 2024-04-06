<script setup>
    const { user } = defineProps(['user'])
</script>

<template>
    <tr class="row">
        <td>
            <img class="ml-auto h-6 w-6 rounded-full" src="~assets/images/photo_placeholder.png"/>
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
    </tr>
</template>

<style>
    .row:first-child {
        border-radius: 8px;
    }

    .row:last-child {
        border-radius: 8px;
    }

    .row:hover {
        background: var(--iskra-surface-variant);
    }
</style>