import axiosClient from "@/axiosClient.js"


// Action that requests meals by their names
export function searchMeals({commit}, keyword){
    axiosClient.get("search.php?s=" + keyword)
    .then(({data}) => {
        commit('setSearchedMeals', data)
    })
}

// Action that requests meals by their first letter
export function searchMealsByLetter({commit}, letter){
    axiosClient.get("search.php?f=" + letter)
    .then(({data}) => {
        commit('setSearchedMealsByLetter', data.meals)
    })
}


// Action that requests meals by their ingredients
export function searchMealsByIngredient({commit}, ingredients){
    axiosClient.get("filter.php?i=" + ingredients)
    .then(({data}) => {
        commit('setSearchedMealsByIngredient', data.meals)
    })
}