<template>

    <div>
        <SearchBarComponent @search_text="(msg) =>ingredient = msg"
       placeholder="Search Meal by Ingredients"/>

    <MealListComponent :meal_list="meal_list"/>
    </div>


</template>


<script setup>
    import {ref, watch, onMounted, computed} from "vue"
    import { useRoute } from "vue-router";
    import MealListComponent from "@/components/MealListComponent.vue";
    import SearchBarComponent from "@/components/SearchBarComponent.vue"
    import store from "@/store";

    const meal_list = computed(() => store.state.searhedMealsByIngredient)
    const route = useRoute()
    const ingredient = ref("")


    function searchByIngredient(){
        store.dispatch("searchMealsByIngredient", ingredient.value)
        route.params.ingredient = ingredient.value
        
    }

    onMounted(() => {
        if (route.params.ingredient){
            ingredient.value = route.params.ingredient
            searchByIngredient()
        }

    })

    watch(ingredient, searchByIngredient)

    

</script>