<template>
    <div>
        <div class="flex justify-center gap-1 md:gap-2 mt-5">
        <router-link :to="{ name: 'searchByLetter', params: { letter: char } }" v-for="char in letters" :key="char.id"
            class="text-sm md:text-md" @click="searchMealByletter(char)">
            {{ char }}
        </router-link>
    </div>

    <MealListComponent :meal_list="meal_list"/>
    </div>
</template>


<script setup>
    import {onMounted, ref, computed} from "vue"
    import { useRoute } from "vue-router";
    import MealListComponent from "@/components/MealListComponent.vue";
    import store from "@/store";

    const meal_list = computed(() => store.state.searhedMealsByLetter)
    const letters = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    const route = useRoute()


    function searchMealByletter(letter){
        store.dispatch("searchMealsByLetter", letter)
        
    }

    onMounted(() => {
        if (route.params.letter)
            searchMealByletter(route.params.letter)

    })

    

</script>