<template>
    <div class="flex w-full h-full">
        <ColorModeButton class="absolute right-8 top-4 z-10"/>

        <NewNavigationRail />
        
        <div class="w-full h-full max-h-full px-2 py-4 overflow-y-scroll">
            <slot />
        </div>
    </div>
</template>