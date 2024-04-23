<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer, YandexMapListener,
  YandexMapDefaultMarker, YandexMapControls,
  YandexMapFeature, YandexMapControl
} from 'vue-yandex-maps';
import { isDarkMode } from '~/utils/darkMode';

//#region Вкладки
const currentFoldId = ref(0)

const toggleFold = (foldId) => {
  if (currentFoldId.value != foldId)
    currentFoldId.value = foldId
}
//#endregion

//#region Карта
const newMarkName = ref("")

const mapTheme = ref("light")
if (isDarkMode) mapTheme.value = "dark"

// Longitude - Долгота / Latitude - широта
const RESTRICTED_AREA = [
  [45.80383655875106, 51.345952973719115],
  [46.34325486671529, 51.662299423887255]
]

const marks = ref([
  {
    id: "0",
    description: "СГТУ, сбор батареек",
    coordinates: [45.97849885721107, 51.52972247772132],
    color: '#00CC00'
  },
  {
    id: "1",
    description: "Вторматик, пункт приёма вторсырья",
    coordinates: [46.09361339014668, 51.497188173983815],
    color: '#00CC00'
  }
])

const pointerMark = ref({
  id: "-1",
  coordinates: [46.069720, 51.518725],
  color: '#CC0000',
})

const onDragMove = () => triggerRef(pointerMark)

const addMark = () => {
  let newName = newMarkName.value.trim()

  if (newName.length === 0) return;

  marks.value.push(
    {
      id: Math.ceil(Math.random() * 1000).toString(),
      coordinates: pointerMark.value.coordinates,
      description: newMarkName.value,
      color: '#00CC00',
    }
  )

  newMarkName.value = ""
}

const deleteMark = (id) => {
  marks.value = marks.value.filter(mrk => mrk.id != id)
}

const focusOnMark = (id) => {

}

watch(isDarkMode, (isDark) => {
  if (isDark) mapTheme.value = "dark"
  else mapTheme.value = "light"
})
//#endregion



/*
const mapClick = (object, event) => {
  pointerMark.coordinates = event.coordinates
  triggerRef(pointerMark);
}
*/
</script>

<template>
  <div class="flex w-full h-full">

    <div class="w-full max-h-full h-full mr-2">
      <p class="title">Карта</p>

      <div>
        <div class="flex mt-4">
          <a @click="currentFoldId !== 0 ? toggleFold(0) : {}" class="ml-auto mr-4 button-green-outline"
            :class="{ 'active': currentFoldId === 0 }">
            <p>Добавление метки</p>
          </a>

          <a @click="currentFoldId !== 1 ? toggleFold(1) : {}" class="mr-auto ml-4 button-green-outline"
            :class="{ 'active': currentFoldId === 1 }">
            <p>Существующие метки</p>
          </a>
        </div>
      </div>

      <div v-if="currentFoldId === 0" class="mt-8">
        <p class="mx-auto w-fit font-bold text-2xl">Добавление метки</p>

        <div class="flex mt-4">
          <input class="text-input w-full" type="text" v-model="newMarkName" placeholder="Наименование" maxlength="255">

          <ButtonFilledPrimary text="Добавить" @click="addMark" class="ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </ButtonFilledPrimary>
        </div>
      </div>

      <div v-if="currentFoldId === 1" class="mt-4 max-h-full">
        <p class="mx-auto w-fit font-bold text-2xl">Существующие метки</p>

        <div class="mt-2 all-marks max-h-full">
          <template v-for="(mark, index) in marks">
            <div>
              <div class="flex">
                <div class="mr-8">
                  <p class="font-bold text-xl h-fit my-auto" style="overflow-wrap: anywhere;">
                    {{ mark.description }}
                  </p>
                  <div class="flex mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                      style="fill: red;">
                      <path
                        d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <p class="my-auto ml-2">{{ mark.coordinates[0] }}, {{ mark.coordinates[1] }}</p>
                  </div>
                </div>

                <div class="flex ml-auto">
                  <ButtonIcon @click="focusOnMark(mark.id)" class="ml-auto my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                      <path
                        d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  </ButtonIcon>

                  <ButtonIcon @click="deleteMark(mark.id)" class="ml-3 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                      <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </ButtonIcon>
                </div>

              </div>
            </div>
            <HorizontalDivider v-if="index < marks.length - 1" class="my-3" />
          </template>
        </div>
      </div>
    </div>

    <div id="map">
      <YandexMap :settings="{
        location: {
          bounds: RESTRICTED_AREA,
        },
        theme: mapTheme,
        zoomRange: { min: 11, max: 17 },
        restrictMapArea: RESTRICTED_AREA
      }" width="100%" height="100%">

        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />

        <YandexMapDefaultMarker v-if="currentFoldId === 1 && marks.length > 0" v-for="marker in marks" :key="marker.id"
          :settings="marker" />

        <YandexMapDefaultMarker v-if="currentFoldId === 0" v-model="pointerMark" :key="pointerMark.id" :settings="{
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
            <div v-if="currentFoldId === 0" class="behaviors flex px-4 py-2">
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
@import '~/assets/css/Button.css';
@import '~/assets/css/Input.css';

#map {
  min-width: 700px;
  width: 60%;
  height: 100%;
  border-radius: 8px;
  border: dashed var(--iskra-color-outline) 1px;
  overflow: hidden;
}

.active {
  border-radius: 8px;
  background: var(--iskra-color-surface-variant);
}

.active:hover {
  cursor: default;
}

.all-marks {
  max-height: 70vh;
  height: auto;
  padding: 16px;
  border: solid var(--iskra-surface-variant) 2px;

  overflow-y: scroll;
}
</style>