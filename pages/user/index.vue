<script setup>
    import '~/assets/css/Titles.css';
    import '~/assets/css/Table.css';
    import '~/assets/css/Search.css'

    const users = ref("");
    users.value = [
      {
        name: "ВАСИЛЕК ВАСИЛЕК",
        email: "la@Algorithm.la"
      },
      {
        name: "лул",
        email: "la@Algorithm.la"
      },
      {
        name: "ВАСИЛЕК ВАСИЛЕК",
        email: "la@Algorithm.la"
      },
      {
        name: "ВАСИЛЕК ВАСИЛЕК",
        email: "la@Algorithm.la"
      },
    ]

    const searchUsers = ref("")
    const searchPrompt = ref("")

    const search = () => {
      searchUsers.value = users.value.filter( usr =>
        usr.name.toLowerCase().includes(searchPrompt.value.toLowerCase()) ||
        usr.email.toLowerCase().includes(searchPrompt.value.toLowerCase())
      )
    }

    const clear = () => {
      searchPrompt.value = ""
      search()
    }

    search()
</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full h-full p-2 overflow-y-scroll">
          <p class="title">Пользователи</p>

          <form v-on:submit.prevent="search" class="search my-4 mx-auto">
            <div class="icon" @click.prevent="search">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
              </svg>
            </div>
            <input type="text" class="mx-2" v-model="searchPrompt" placeholder="Поиск"/>
            <div class="icon" @click.prevent="clear">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </div>
          </form>

          <div>
              <table class="w-6/12 min-w-fit mx-auto">
                  <thead>
                    <tr>
                      <td class="w-12">Иконка</td>
                      <td>Имя</td>
                      <td>Почта</td>
                    </tr>
                  </thead>
                  <tbody>
                      <UserRow v-for="u in searchUsers" :user="u"/>
                  </tbody>
              </table>
          </div>
        </div>
    </div>
</template>