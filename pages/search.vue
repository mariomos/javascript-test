<template>
    <section class="max-w-screen-2xl mx-auto my-4 px-4">
      <div class="flex md:justify-between items-center flex-col md:flex-row">
        <h1 class="text-2xl font-bold my-2">Search results for: "<span class="text-blue-600">{{ searchQuery }}</span>"</h1>
        <PrimaryButton class="mt-4 flex h-full mr-2" @click="$router.push('/')">
          <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          New search
        </PrimaryButton> 
      </div>
      <div v-if="movies.Response === 'False'" class="min-h-screen flex flex-col justify-between" >
        <p class="text-gray-700 mt-4 bg-red-100 p-4 rounded-lg">Oops! We couldn't find any results for "{{ searchQuery }}". Please try a different search term.</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(movie, index) in movies.Search.slice(0, 3)" :key="movie.imdbID">
          <SearchCard :movie="movie"/>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  
  const route = useRoute();
  const searchQuery = route.query.q; 
  
  const { data: movies } = await useFetch(`https://www.omdbapi.com/?apikey=36cd9012&s=${searchQuery}`);

  </script>
  