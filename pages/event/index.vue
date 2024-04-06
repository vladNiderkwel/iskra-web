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
  <p class="title">События</p>
  <div class="flex flex-col items-center">
      <EventCard v-for="e in events" :event="e" />
  </div>
</template>