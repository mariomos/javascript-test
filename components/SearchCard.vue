<template>
    <div>
        <NuxtLink :to="movie.imdbID">
            <div class="bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md overflow-hidden">
                <div v-if="movie.Poster === 'N/A'" class="flex items-center justify-center h-[38rem]">
                    <p class="text-gray-600">Image Unavailable</p>
                </div>
                <div v-else>
                    <img class="w-full h-[38rem] object-cover" :src="movie.Poster" :alt="movie.Title">
                </div> 

              <div class="p-4">
                <p class="text-lg font-bold mb-2">{{ movie.Title }}</p>
                <div class="flex justify-between items-center">
                  <p class="text-sm text-gray-700">{{ movie.Year }}</p>
                  <p class="text-sm font-bold bg-gray-700 text-white rounded px-2 py-1 capitalize">{{ movie.Type }}</p>
                </div>
              </div>
            </div>
          </NuxtLink>
    </div>
</template>

<script setup>
const { movie } = defineProps(['movie'])

</script>