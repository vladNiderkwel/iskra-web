<template>
    <div class="flex w-full h-full bg-iskra-surface">
        <NewNavigationRail />
        
        <!--
            <VerticalDivider />
        -->
        <div class="w-full h-full px-2 py-4 overflow-y-scroll">
            <slot />
        </div>
    </div>
</template>