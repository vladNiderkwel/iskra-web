<template>
    <div class="indicator"></div>
</template>

<style scoped>
    .indicator {
        border-width: 8px;
        border-style: solid;
        border-color: var(--iskra-pink) var(--iskra-pink) transparent transparent;
        width: 64px;
        height: 64px;
        border-radius: 9999px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>