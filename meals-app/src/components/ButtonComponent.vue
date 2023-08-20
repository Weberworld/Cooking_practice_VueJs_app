<template>
    <div class="my-3">
        <a :href=props.btnLink class="bg-red-600 hover:bg-rose-300 text-white rounded p-2 text-small" :target="'_blank'">
            <slot>YouTube</slot>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    btnLink: String
})
</script>