<template>
    <div class="flex w-full h-full">
        <NewNavigationRail />

        <VerticalDivider class="h-dvh"/>

        <!--<div class="w-full h-full max-h-full p-2 overflow-y-scroll">-->
        <slot />

        <ColorModeButton class="absolute right-8 top-4 z-10" />
    </div>
</template>