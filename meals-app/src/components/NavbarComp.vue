<template>
    <header class="mbg-gray-100 shadow h-18 flex justify-between items-stretch">
            <router-link :to="{name: 'home'}" class="px-8 py-3">Home</router-link>

            <div class="flex items-center gap-2 mr-5">
                <router-link :to="{name: 'searchByName'}" class="inline-flex items-center px-2 h-full hover:bg-purple-300">Search Meals</router-link>
                <router-link :to="{name: 'searchByLetter'}" class="inline-flex items-center px-2 h-full hover:bg-purple-300">Search By Letter</router-link>
                <router-link :to="{name: 'searchByIngredients'}" class="inline-flex items-center px-2 h-full hover:bg-purple-300">Search By Ingredients</router-link>
            </div>
        </header>

</template>

