<script setup>
    import '~/assets/css/UserRow.css'

    const { user } = defineProps(['user'])
</script>

<template>
    <tr class="row">
        <td>
            <img class="ml-auto h-6 w-6" src="~assets/images/photo_placeholder.png"/>
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
    </tr>
</template>

<style>

</style>