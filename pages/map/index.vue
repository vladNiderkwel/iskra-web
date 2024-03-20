<script>
    import '~/assets/css/Titles.css';

</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full h-full p-4 overflow-y-scroll">
            <p class="title">Карта</p>
            <div id="map" class="w-auto h-4 my-4 bg-iskra-green">

            </div>
        </div>
    </div>
</template>