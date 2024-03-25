<template>
    <div class="container mx-auto py-8">
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <button @click="goBack" class="text-gray-600 hover:text-gray-800 focus:outline-none mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1 class="text-3xl font-bold mb-4 text-center">{{ beer.name }}</h1>
        <div class="flex items-center justify-between mb-4">
          <p class="text-gray-600">Type: {{ beer.type }}</p>
          <p class="text-gray-600">Rating: {{ beer.rating }} ({{ beer.totalRatings }} ratings)</p>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  
  const router = useRouter();
  const { id } = useRoute().params;
  const uri = `https://web-base-backend-js.vercel.app/api/products/${id}`;
  const { data: beer } = await useFetch(uri);
  
  const goBack = () => {
    router.go(-1);
  };
  </script>
  
  <style>

  </style>
  