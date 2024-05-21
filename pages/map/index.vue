<script setup>
import Title from '~/components/Title.vue';
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer, YandexMapListener,
  YandexMapDefaultMarker, YandexMapControls,
  YandexMapFeature, YandexMapControl
} from 'vue-yandex-maps';
import { isDarkMode } from '~/utils/darkMode';

const config = useRuntimeConfig()

//#region Вкладки
const currentFoldId = ref(0)

const toggleFold = (foldId) => {
  if (currentFoldId.value != foldId)
    currentFoldId.value = foldId
}
//#endregion

//#region Карта
const newMarkName = ref("")
const newMarkType = ref(0)

const mapTheme = ref("light")
if (isDarkMode) mapTheme.value = "dark"

// Longitude - Долгота / Latitude - широта
const RESTRICTED_AREA = [
  [45.80383655875106, 51.345952973719115],
  [46.34325486671529, 51.662299423887255]
]

const pointerMark = ref({
  id: "-1",
  coordinates: [46.069720, 51.518725],
  color: '#CC0000',
})

const onDragMove = () => triggerRef(pointerMark)

const addMark = async () => {
  let newName = newMarkName.value.trim()

  if (newName.length === 0) return;

  await useFetch(`${config.public.baseUrl}/map-mark/`, {
    method: "post",
    body: {
      name: newMarkName.value,
      type: newMarkType.value,
      coordinates: pointerMark.value.coordinates
    }
  })

  newMarkName.value = ""
  newMarkType.value = 0
}

const deleteMark = async (id) => {
  await useFetch(`${config.public.baseUrl}/map-mark/delete/${id}`)
  refresh()
}

watch(isDarkMode, (isDark) => {
  if (isDark) mapTheme.value = "dark"
  else mapTheme.value = "light"
})
//#endregion

const { data, error, pending, refresh } = await useFetch(`${config.public.baseUrl}/map-mark/`)

/*
const mapClick = (object, event) => {
  pointerMark.coordinates = event.coordinates
  triggerRef(pointerMark);
}
*/
</script>

<template>
  <div class="w-full h-full max-h-full p-2">
    <div class="flex w-full h-full">

      <div class="w-full max-h-full h-full mr-2">
        <Title text="Карта" />

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

          <input class="text-input w-full mt-2" type="text" v-model="newMarkName" placeholder="Наименование"
            maxlength="255">

          <p class="w-fit font-bold text-xl mt-2">Тип</p>
          <select class="text-input" v-model="newMarkType">
            <option value="0">Общий</option>
            <option value="1">Одежда</option>
            <option value="2">Батарейки</option>
            <option value="3">Металлолом</option>
            <option value="4">Стекло</option>
            <option value="5">Вторсырье</option>
            <option value="6">Пластик</option>
            <option value="7">Бытовая техника</option>
          </select>

          <ButtonFilledPrimary text="Добавить" @click="addMark" class="mt-2 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </ButtonFilledPrimary>
        </div>

        <div v-if="currentFoldId === 1" class="mt-4 max-h-full">
          <p class="mx-auto w-fit font-bold text-2xl">Существующие метки</p>

          <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
            </svg>
          </ButtonTonal>

          <LoadingIndicator v-if="pending" class="mx-auto mt-2" />
          <ErrorLabel v-else-if="error" />
          <div v-else class="mt-2 all-marks max-h-full">
            <template v-for="(mark, index) in data">
              <div>
                <div class="flex">
                  <div class="mr-8">
                    <p class="font-bold text-xl h-fit my-auto" style="overflow-wrap: anywhere;">
                      {{ mark.name }}
                    </p>

                    <p v-if="mark.type === 0" class="h-fit my-auto italic">Общий</p>
                    <p v-if="mark.type === 1" class="h-fit my-auto italic">Одежда</p>
                    <p v-if="mark.type === 2" class="h-fit my-auto italic">Батарейки</p>
                    <p v-if="mark.type === 3" class="h-fit my-auto italic">Металлолом</p>
                    <p v-if="mark.type === 4" class="h-fit my-auto italic">Стекло</p>
                    <p v-if="mark.type === 5" class="h-fit my-auto italic">Вторсырье</p>
                    <p v-if="mark.type === 6" class="h-fit my-auto italic">Пластик</p>
                    <p v-if="mark.type === 7" class="h-fit my-auto italic">Бытовая техника</p>

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
                    <ButtonIcon @click="deleteMark(mark.id)" class="ml-3 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                          d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </ButtonIcon>
                  </div>

                </div>
              </div>
              <HorizontalDivider v-if="index < data.length - 1" class="my-3" />
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

          <YandexMapDefaultMarker v-if="currentFoldId === 1 && !pending && !error" v-for="mark in data" :key="mark.id"
            :settings="{
              coordinates: mark.coordinates,
              title: mark.name,
            }" />

          <YandexMapDefaultMarker v-if="currentFoldId === 0" v-model="pointerMark" :key="pointerMark.id" :settings="{
            coordinates: pointerMark.coordinates,
            draggable: true,
            onDragMove,
          }" />

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
        </YandexMap>
      </div>

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