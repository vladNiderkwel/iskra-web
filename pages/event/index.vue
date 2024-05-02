<script setup>

const config = useRuntimeConfig()
const page = ref(useRoute().query.page ? useRoute().query.page : 1)
const query = ref("")

const { data, error, pending, refresh } = await useAsyncData("allevents",
  () => $fetch(`${config.public.baseUrl}/event`, {
    method: 'get',
    query: {
      page: page.value - 1,
      //search: query
    }
  })
)

watch(page, () => refresh())

const clear = () => {
  query.value = ""
  search()
}

const search = () => refresh()

/*
const events = ref([
  {
    id: 1,
    title: "TITSILE",
    description: "Алеша, выслушав приказание отца, которое тот выкрикнул ему из коляски, уезжая из монастыря, оставался некоторое время на месте в большом недоумении. Не то чтоб он стоял как столб, с ним этого не случалось. Напротив, он, при всем беспокойстве, успел тотчас же сходить на кухню игумена и разузнать, что наделал вверху его папаша. Затем, однако, пустился в путь, уповая, что по дороге к городу успеет как-нибудь разрешить томившую его задачу. Скажу заранее: криков отца и приказания переселиться домой, «с подушками и тюфяком», он не боялся нимало. Он слишком хорошо понял, что приказание переезжать, вслух и с таким показным криком, дано было «в увлечении», так сказать даже для красоты, — вроде как раскутившийся недавно в их же городке мещанин, на своих собственных именинах, и при гостях, рассердясь на то, что ему не дают больше водки, вдруг начал бить свою же собственную посуду, рвать свое и женино платье, разбивать свою мебель и, наконец, стекла в доме и всё опять-таки для красы; и всё в том же роде, конечно, случилось теперь и с папашей. Назавтра, конечно, раскутившийся мещанин, отрезвившись, пожалел разбитые чашки и тарелки. Алеша знал, что и старик назавтра же наверно отпустит его опять в монастырь, даже сегодня же, может, отпустит. Да и был он уверен вполне, что отец кого другого, а его обидеть не захочет. Алеша уверен был, что его и на всем свете никто и никогда обидеть не захочет, даже не только не захочет, но и не может. Это было для него аксиомой, дано раз навсегда, без рассуждений, и он в этом смысле шел вперед, безо всякого колебания.",
    startDate: "01.01.2000",
    endDate: "02.01.2000",
    author: {
      name: "Василек Василек"
    },
    members: [
      {
        name: "Василек Василек"
      },
      {
        name: "Василек Василек"
      },
      {
        name: "Василек Василек"
      },
      {
        name: "Василек Василек"
      },
      {
        name: "Василек Василек"
      },
    ]
  }
])
*/
</script>

<template>
  <p class="title">События</p>

  <div v-on:submit.prevent="search" class="search mt-4 mx-auto">
    <div class="icon" @click.prevent="search">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path
          d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
    </div>
    <input type="text" class="mx-1" v-model="searchPrompt" placeholder="Поиск" />
    <div class="icon" @click.prevent="clear">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  </div>

  <ButtonTonal text="Обновить" @click="refresh()" class="mx-auto mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path
        d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
    </svg>
  </ButtonTonal>

  <!--
  <div class="flex flex-col items-center mt-4">
    <EventCard v-for="e in events" :event="e" class="my-2" />
  </div>
  -->

  <div>
    <LoadingIndicator v-if="pending" class="mx-auto mt-8" />

    <ErrorLabel v-else-if="error" class="mx-auto mt-4" />

    <template v-else>
      <EventCard v-for="event in data.content" :event="event" class="my-2" />
      <Pagination v-if="data.totalPages > 1" class="mt-8" v-model="page" :totalPages="data.totalPages" />
    </template>
  </div>
</template>

<style scoped>
@import '~/assets/css/Titles.css';
@import '~/assets/css/Search.css';
@import '~/assets/css/Button.css';
@import '~/assets/css/Pagination.css';
</style>