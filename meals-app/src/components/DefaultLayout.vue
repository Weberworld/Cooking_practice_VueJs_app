<template>
    <div class="bg-gray-100 h-full w-full">
        <div class="h-3"></div>

        <div>
            <NavbarComp/>
            </div>
        
        <div class="px-2">
            <router-view />
        </div>

    </div>

</template>

<script setup>

import NavbarComp from "./NavbarComp.vue"

</script>