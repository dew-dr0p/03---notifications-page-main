<script setup>
import Header from './components/Header.vue'
import Content from './components/Content.vue';
import { ref, computed } from "@vue/reactivity"

const notifications = ref([
  {
    id: "00",
    avatar: "src/assets/avatar-mark-webber.webp",
    name: "Mark Webber",
    text: "reacted to your recent post",
    action: "My first tournament today!",
    time: "1m",
    read: false
  },
  {
    id: "01",
    avatar: "src/assets/avatar-angela-gray.webp",
    name: "Angela Gray",
    text: "followed you",
    time: "5m",
    read: false
  },
  {
    id: "02",
    avatar: "src/assets/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    text: "has joined your group",
    action: "Chess Club",
    time: "1 day",
    read: false
  },
  {
    id: "03",
    avatar: "src/assets/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    text: "sent you a private message",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days",
    read: true
  },
  {
    id: "04",
    avatar: "src/assets/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    text: "commented on your picture",
    picture: "src/assets/image-chess.webp",
    time: "1 week",
    read: true
  },
  {
    id: "05",
    avatar: "src/assets/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    action: "5 end-game strategies to increase your win rate",
    time: "2 weeks",
    read: true
  },
  {
    id: "06",
    avatar: "src/assets/avatar-anna-kim.webp",
    name: "Anna Kim",
    text: "left the group",
    action: "Chess Club",
    time: "2 weeks",
    read: true
  }
])

function toggleAllRead() {
  notifications.value.forEach((value) => { value.read = true })
  return true
}

// Increasing functionality with commented codes

// function toggleAllRead() {
//   notifications.value.forEach((value) => { value.read = true })
//   return toggleAllUnread ? false : true
// }

// function toggleAllUnread() {
//   notifications.value.forEach((value) => { value.read = false })
//   return toggleAllRead ? false : true
// }

// const isRead = computed(() => { 
//   const read = ref(false)
//   toggleAllRead ? read.value = true : read.value = false
//   return read.value
// })

// console.log(isRead.value)

const number = computed(() => {
  const number = ref(notifications.value.filter((value) => { return value.read == false }).length)
  console.log(number.value)
  return number.value
})

</script>

<template>
  <main class="flex lg:justify-center lg:items-center bg-grayishBlue-veryLight h-full">
    <div class="bg-white lg:shadow lg:rounded lg:my-3 flex flex-col p-5 pb-0" style= "width: 100%">
      <div>
        <!-- <Header 
          @toggle-read="isRead ? toggleAllUnread : toggleAllRead"
          :read="isRead"
          :number="number"
          class="flex flex-row justify-between pb-7" 
        /> -->
        <Header 
          @toggle-read="toggleAllRead"
          :number="number"
          class="flex flex-row justify-between pb-7" 
        />
      </div>
      <div>
        <Content 
          v-for="notification in notifications" 
          :key="notification.id"
          :notification="notification" 
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
