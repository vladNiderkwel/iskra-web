<template>
    <div></div>
</template>

<style scoped>
div {
    border-width: 8px;
    border-style: solid;
    border-color: var(--iskra-color-secondary) var(--iskra-color-secondary) transparent transparent;
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>