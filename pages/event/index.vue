<script setup>
  import '~/assets/css/Titles.css';

  const events = ref("");
  events.value = [
      {
        title: "TITSILE",
        description: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
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
      },
      {
        title: "TITSILE",
        description: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
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
      },
      {
        title: "TITSILE",
        description: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
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
  ]

</script>

<template>
    <div class="flex w-full h-full bg-iskra-surface">   
        <NavigationRail />

        <div class="w-full p-4 overflow-y-scroll">
            <p class="title">События</p>
            <div class="flex flex-col items-center">
                <EventCard v-for="e in events" :event="e" />
            </div>
        </div>
    </div>
</template>