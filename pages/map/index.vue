<script setup>
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker } from 'vue-yandex-maps';

const coordinates = ref([46.069720, 51.518725])

const marks = ref([
  {
    id: "0",
    coordinates: [46.069720, 51.518725],
    color: '#00CC00'
  },
  {
    id: "1",
    coordinates: [46.067720, 51.538725],
    color: '#00CC00'
  }
])

</script>

<template>
  <p class="title">Карта</p>

  <YandexMap class="bg-iskra-secondary mx-auto map"
    :settings="{
      location: {
        center: coordinates,
        zoom: 13
      },
    }"
    width="90%"
    height="90%">

    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />

    <YandexMapDefaultMarker v-for="marker in marks" :key="marker.id" :settings="marker"/>

  </YandexMap>

</template>

<style scoped>
@import '~/assets/css/Titles.css';

.map {
  width: 90%;
  height: 90%;
}
</style>