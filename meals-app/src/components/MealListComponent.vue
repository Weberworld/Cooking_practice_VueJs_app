<template>

        <div>
            <!-- Loading effect -->
            <div v-if="loading"> Loading ... </div>

            <div class="md-3 md:m-10 p-3">

                <div v-if="!meal_list">Empty</div>

                <!-- Meals grid list  -->
                <div v-else>
                    <div class="grid grid-cols-2 md:grid-cols-3 w-full justify-center content-center gap-5">
                        <div v-for="meal in props.meal_list" :key="meal.idMeal">

                            <!-- Meal item -->


                            <div class="bg-white rounded-t-2xl ">
                                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                                    <div class="rounded-t-2xl shadow">
                                        <img :src='meal.strMealThumb'
                                            class="w-full h-34 md:h-48 rounded-t-2xl object-cover" />
                                    </div>
                                </router-link>
                                <div class="p-3">
                                    <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                                    <div>
                                    <!-- <h6 class="text-sm max-w-0 pr-4">{{ meal.strTags }}</h6> -->
                                    </div>

                                    <!-- Youtube button -->
                                    <ButtonComponent :btnLink='meal.strYoutube' />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue';
import {defineProps} from "vue"

const props = defineProps({
    meal_list: Array
})

</script>