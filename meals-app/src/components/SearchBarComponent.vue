<template>
    <div class="flex flex-col p-8 ">
        <div>
            <input v-model="search_text" @change="alertParent" class="rounded-lg border-2 border-gray-200 w-full"
                :placeholder="props.placeholder" />
        </div>
    </div>
</template>



<script setup>
    import { ref, defineProps, defineEmits } from 'vue';

    const search_text = ref("")
    const emits = defineEmits(['search_text'])

    const props = defineProps({
        placeholder: String
    })

    function alertParent(){
        emits("search_text", search_text.value)
    }

</script>