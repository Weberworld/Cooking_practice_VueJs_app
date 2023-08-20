export function setSearchedMeals(state, meals){
    state.searched_meals.data = meals
    state.searched_meals.loading = false
}

export function setSearchedMealsByLetter(state, meals){
    state.searhedMealsByLetter = meals
}

export function setSearchedMealsByIngredient(state, meals){
    state.searhedMealsByIngredient = meals
}