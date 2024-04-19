<script setup>
const { route, totalPages, currentPage }
    = defineProps(["route", "totalPages", "currentPage"])

let rt = route

if( rt.includes("?") ) rt += "&" 
else rt += "?"

</script>

<template>
    <NuxtLink v-if="currentPage >= 2" :to="`${rt}?page=${currentPage - 1}`" class="page-number">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    </NuxtLink>

    <NuxtLink class="page-number" v-for="page in totalPages" :class="{ 'active-page': page === currentPage }"
        :to="`${rt}?page=${page}`">
        <p>{{ page }}</p>
    </NuxtLink>

    <NuxtLink v-if="currentPage <= totalPages - 1" :to="`${rt}page=${currentPage + 1}`" class="page-number">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
    </NuxtLink>
</template>

<style scoped>
.page-number {
    margin: 0 4px;
    border-radius: 32px;
    padding: 8px 16px;
    border: solid var(--iskra-color-surface-variant) 1px;
    transition: all 0.4s;

    color: var(--iskra-color-on-surface);
    fill: var(--iskra-color-on-surface);
}

.page-number:hover {
    background: var(--iskra-color-surface-variant);
    cursor: pointer;
    border-radius: 8px;
}

.active-page,
.active-page:hover {
    background: var(--iskra-color-green);
    color: var(--iskra-color-black);
}

.pages:first-child {
    margin-left: 0;
}

.pages:last-child {
    margin-right: 0;
}
</style>