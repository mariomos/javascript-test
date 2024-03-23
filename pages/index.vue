<template>
    <div class="bg-gradient-to-b from-slate-50 to-slate-300 min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div class="text-gray-800">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Discover Your Favourite Movies</h1>
            <p class="text-lg md:text-xl leading-relaxed">Explore a vast collection of movies and find your next watch.</p>
          </div>
       
          <div>
            <input v-model="searchQuery" @keyup.enter="searchMovies" type="text" placeholder="Enter movie title..." class="mr-2 w-full md:w-96 px-6 py-3 rounded-lg bg-white placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button @click="searchMovies" class="mt-4 w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const router = useRouter();
  let searchQuery = '';
  
  function searchMovies() {
    if (searchQuery.trim() !== '') {
      searchQuery =  searchQuery.trim().replace(/\s+/g, ' ');
      router.push({ path: '/search', query: { q: searchQuery } });
    }
  }
  </script>
  
  