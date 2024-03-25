<template>
    <section class="my-4 px-4">
        <div class="flex justify-center items-center">
            <div class="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6 relative">
                <button @click="goBack" class="absolute top-4 left-4 focus:outline-none">
                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div v-if="movie.Poster === 'N/A'" class="flex items-center justify-center h-[38rem]">
                    <p class="text-gray-600">Image Unavailable</p>
                </div>
                <div v-else>
                    <img class="rounded-lg mb-4 mt-6 mx-auto" :src="movie.Poster" :alt="movie.Title">
                </div> 
                <div class="flex justify-between">
                    <h2 class="text-xl font-bold mb-2">{{ movie.Title }}</h2> 
                    <div class="flex items-center bg-gray-700 text-white rounded px-2 py-1">
                        <StarIcon class="w-6 h-6 " />
                        <p class="text-sm font-bold ml-1">{{ movie.imdbRating }}</p>
                    </div>
                </div>
            
                <p class="text-sm text-gray-700 mb-2">{{ movie.Year }} | {{ movie.Rated }} | {{ movie.Genre }}</p> 
                <p class="text-sm text-gray-700 mb-2">Starring: {{ movie.Actors }}</p> 
            
                <p class="text-sm text-gray-700 mt-2">Description: {{ movie.Plot }}</p> 
                <div class="flex items-end">
                    <PrimaryButton class="mt-4 flex h-full mr-2" @click="$router.push('/')">
                        <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        New search
                    </PrimaryButton> 
                    <SecondaryButton class="h-full"><a :href="imdbId" target="_blank" >More information</a></SecondaryButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { movie } = defineProps(['movie'])

const { id } = useRoute().params;
const imdbId = `https://www.imdb.com/title/${id}`;

const goBack = () => {
    const router = useRouter();
    router.go(-1); // Go back to the previous page
}
</script>
