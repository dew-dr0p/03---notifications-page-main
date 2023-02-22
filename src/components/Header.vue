<template>
    <div>
        <div class="inline-flex">
            <h1 class="text-3xl font-bold pr-5 text-blue-veryDark">Notifications</h1>
            <div class="rounded bg-blue text-white px-3 py-1 items-center text-lg font-bold p-">
                <p>{{ number }}</p>
            </div>
        </div>
            <!-- <p @click="$emit('toggleRead')" class="text-lg pl-10 cursor-pointer">Mark all as {{ read ? "unread" : "read" }}</p> -->
            <p @click="$emit('toggleRead')" class="text-lg pl-10 cursor-pointer hover:text-blue">Mark all as read</p>
    </div>
</template>

<script setup>
defineProps({ 
    // read: Boolean,
    number: Number
})

</script>