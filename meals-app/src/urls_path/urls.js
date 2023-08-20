import { createRouter, createWebHistory } from "vue-router"
import DefaultLayout from "../components/DefaultLayout.vue"
import HomeScreen from "../views/HomeScreen.vue"
import LetterSearch from "../views/LetterSearch.vue"
import NameSearch from "../views/NameSearch.vue"
import IngredientSearch from "../views/IngredientSearch.vue"
import MealDetails from "../views/MealDetails.vue"


const routes_paths = [

    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeScreen,
            },

            {
                path: '/byName/:name?',
                name: 'searchByName',
                component: NameSearch,
            },

            {
                path: '/byIngredients/:ingredient?',
                name: 'searchByIngredients',
                component: IngredientSearch,
            },

            {
                path: "/byLetter/:letter?",
                name: 'searchByLetter',
                component: LetterSearch,
            },

            {
                path: "/mealDetails/:id?",
                name: 'mealDetails',
                component: MealDetails,
            },

        ]
    }






];


const router = createRouter({
    history: createWebHistory(),
    routes: routes_paths
});

export default router


