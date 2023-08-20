<template>
    <div  class="w-full">

        <!-- Seach Bar -->
        <div class="flex flex-col p-8 ">
            <div>
                <input v-model="search_text" @change="getMeal" class="rounded-lg border-2 border-gray-200 w-full"
                    placeholder="Search for meal" />
            </div>
        </div>

        <MealListComponent :meal_list="meal_list"/>

    </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import MealListComponent from "../components/MealListComponent.vue"

const search_text = ref("")
// const loading = computed(() => store.state.searched_meals.loading)

const meal_list = computed(() => store.state.searched_meals.data.meals)
const route = useRoute()


function getMeal() {
    store.dispatch("searchMeals", search_text.value)
    store.state.searched_meals.loading = true
}


onMounted(() => {
    store.state.searched_meals.loading =
    search_text.value = route.params.name
    if (search_text.value) {
        getMeal()
    }
})


</script>
