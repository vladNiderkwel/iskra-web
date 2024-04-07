<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer, YandexMapListener,
  YandexMapDefaultMarker, YandexMapControls,
  YandexMapFeature, YandexMapControl
} from 'vue-yandex-maps';

const coordinates = ref([46.069720, 51.518725])

// Longitude - Долгота / Latitude - широта
const RESTRICTED_AREA = [
[45.80383655875106, 51.345952973719115],
[46.34325486671529, 51.662299423887255]]

const bounds = () => [
  RESTRICTED_AREA[0], [RESTRICTED_AREA[1][0], RESTRICTED_AREA[0][1]],
  RESTRICTED_AREA[1], [RESTRICTED_AREA[0][0], RESTRICTED_AREA[1][1]]
]

const marks = ref([
  {
    id: "0",
    coordinates: [46.079420, 51.519525],
    color: '#00CC00'
  },
  {
    id: "1",
    coordinates: [46.067720, 51.538725],
    color: '#00CC00'
  }
])

const onDragMove = () => {
  triggerRef(pointerMark);
};

const pointerMark = ref({
  id: "-1",
  coordinates: [46.069720, 51.518725],
  color: '#CC0000',
})

/*
const mapClick = (object, event) => {
  pointerMark.coordinates = event.coordinates
  triggerRef(pointerMark);
}
*/
</script>

<template>
  <div class="flex w-full h-full">

    <div class="w-full h-full mr-2">
      <p class="title">Карта</p>

    </div>

    <div id="map">
      <YandexMap :settings="{
        location: {
          bounds: RESTRICTED_AREA,
          //center: coordinates,
        },
        zoomRange: { min: 11, max: 17 },
        restrictMapArea: RESTRICTED_AREA
      }" width="100%" height="100%">

        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />

        <YandexMapDefaultMarker v-for="marker in marks" :key="marker.id" :settings="marker" />

        <YandexMapDefaultMarker v-model="pointerMark" :key="pointerMark.id" :settings="{
          coordinates: pointerMark.coordinates,
          draggable: true,
          onDragMove,
        }" />

<!--
        <YandexMapFeature :settings="{
          geometry: {
            type: 'Polygon',
            coordinates: [bounds()],
          },
          style: {
            stroke: [{ width: 8, color: '#CC0000' }],
            fill: 'rgba(0, 0, 0, 0)',
          },
        }" />
-->
        <YandexMapControls :settings="{ position: 'top' }">
          <YandexMapControl>
            <div class="behaviors flex px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                style="fill: red;">
                <path
                  d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <p class="ml-3"> <b>lat</b> {{ pointerMark.coordinates[0] }} <b>lon</b> {{ pointerMark.coordinates[1] }}
              </p>
            </div>
          </YandexMapControl>
        </YandexMapControls>

        <!--<YandexMapListener :settings="{ onClick: mapClick }" />-->

      </YandexMap>
    </div>

  </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';

#map {
  min-width: 700px;
  width: 60%;
  height: 100%;
  border-radius: 8px;
  border: solid var(--iskra-surface-variant) 2px;
  overflow: hidden;
}
</style>