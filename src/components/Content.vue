<template>
    <div 
        @click="notification.read = !notification.read"
        class="rounded p-5 my-2 grid grid-flow-col items-start"
        :style="notification.picture ? `grid-template-columns: 1fr 6fr 1fr;` : `grid-template-columns: 1fr 7fr;` "
        :class="notification.read ? `` : `bg-grayishBlue-light1`"
    >
        <div class="pr-5">
            <img :src="notification.avatar" alt="" class="w-full">
            <img v-if="notification.message" v-show="false" :src="notification.avatar" alt="" class="w-full">
        </div>
        <div>
            <p>
                <span>
                    <a href="#" class="font-bold text-blue-veryDark">
                        {{ notification.name }}
                    </a>
                </span>
                {{ notification.text }} 
                <span>
                    <a href="#" class="font-bold text-grayishBlue-dark">
                        {{ notification.action }}
                    </a>
                </span>
                <span v-if="!notification.read" class="rounded-full bg-red p-1 ml-2 inline-flex items-center">
                </span>
            </p>
            <p class="text-grayishBlue">
                {{ notification.time }} ago
            </p>
            <p 
                v-if="notification.message" 
                class="rounded border border-grayishBlue p-5 mt-3 hover:bg-grayishBlue-light1 cursor-pointer"
            >
                {{ notification.message }}
            </p>
        </div>
        <div v-if="notification.picture" class="pl-5 justify-self-end cursor-pointer">
            <img :src="notification.picture" alt="" class="w-full rounded">
        </div>
    </div>
</template>

<script setup>
defineProps({
    notification: {
        type: Object,
        required: true
    }
})
</script>