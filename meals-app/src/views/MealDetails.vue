<template>
    <div class="p-5 w-full bg-white">
        <div class="mx-5">
            <h1 class="text-center font-bold text-2xl sm:text-5xl mb-5">{{ meal.strMeal }}</h1>

            <div class="grid md:grid-cols-3">
                <div >
                    
                        <img :src='meal.strMealThumb' class="h-64 w-64 md:h-85 md:w-80 rounded-t-2xl content-center"/>
                    
                        <div class="md:gap-10 py-10 max-w-sm">
                        <h2><span class="font-semibold text-lg">Category</span>: {{ meal.strCategory }}</h2>
                        <h2 class="max-w-xs"><span class="font-semibold text-lg">Tags:</span> {{ meal.strTags }}</h2>
                        <h2><span class="font-semibold text-lg">Location:</span> {{ meal.strArea }}</h2>
                    </div>
                </div>

                <div class="col-span-2">
                    <p class="italic justify-center"> {{ meal.strInstructions }}</p>

                    <div class="grid grid-cols-2 gap-6 mt-10">

                        <div>
                            <h3 class="font-semibold text-lg text-center">Ingredients</h3>

                            <ul v-for="(n, id ) in new Array(20)" :key="id" class="list-disc">
                                <li v-if="meal[`strIngredient${id + 1}`]">
                                    {{ meal[`strIngredient${id + 1}`] }}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-semibold text-lg text-center">Measure</h3>
                            <ul class="list-disc">
                                <template v-for="(n, id ) in new Array(20)" :key="id">
                                    <li v-if="meal[`strMeasure${id + 1}`]">
                                        {{ meal[`strMeasure${id + 1}`] }}
                                    </li>
                                </template>
                            </ul>

                        </div>


                    </div>

                    <div class="flex justify-between py-5">
                        <ButtonComponent :btn-link='meal.strYoutube'>Watch YouTube</ButtonComponent>
                        <ButtonComponent :btn-link='meal.strSource'>Go to Source</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import axiosClient from "@/axiosClient";
    import ButtonComponent from "@/components/ButtonComponent.vue";
    import { ref, onMounted } from "vue"
    import { useRoute } from "vue-router"

    const meal = ref({})
    const route = useRoute()

    onMounted(() => {
        axiosClient.get(`lookup.php?i=${route.params.id}`)
            .then(({ data }) => {
                meal.value = data.meals[0] || {}
            })
    })

</script>