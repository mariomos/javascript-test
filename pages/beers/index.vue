<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4 flex items-center justify-between">
      Beer List
      <PrimaryButton @click="createNewBeer">
        + New Beer
      </PrimaryButton>
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div v-for="beer in products" :key="beer._id" class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">

        <router-link :to="'/beers/' + beer._id" class="block">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold mb-2">{{ beer.name }}</h2>
              <p class="text-gray-600">{{ beer.type }}</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 0a1 1 0 0 1 .79.38l3.95 5.5 6.01.88a1 1 0 0 1 .55 1.7l-4.36 4.25 1.03 6a1 1 0 0 1-1.45 1.05L10 16.63l-5.12 2.84a1 1 0 0 1-1.45-1.05l1.03-6-4.36-4.25a1 1 0 0 1 .55-1.7l6.01-.88L9.21.38A1 1 0 0 1 10 0zm0 2.5L8.93 6.44a1 1 0 0 1-.74.55l-4.42.64 3.2 3.12a1 1 0 0 1 .29.89l-.76 4.48 4.23-2.35a1 1 0 0 1 .96 0l4.23 2.35-.76-4.48a1 1 0 0 1 .29-.89l3.2-3.12-4.42-.64a1 1 0 0 1-.74-.55L10 2.5z"/>
              </svg>
              <span class="text-sm text-gray-700">{{ beer.rating.toFixed(1) }} ({{ beer.totalRatings }} ratings)</span>
            </div>
          </div>
        </router-link>
        <div class="flex items-center mt-2">
          <SecondaryButton @click="rateBeer(beer)" class="mr-2">Rate</SecondaryButton>
          <SecondaryButton @click="updateBeer(beer)" class="mr-2">Update</SecondaryButton>
          <SecondaryButton @click="deleteBeer(beer)">Delete</SecondaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Fetch beer data from the backend
const { data: products } = await useFetch('https://web-base-backend-js.vercel.app/api/products/');

// Function to handle creating a new beer
const createNewBeer = async () => {
  // Implementation for creating a new beer goes here
};

// Function to handle rating a beer
const rateBeer = async (beer) => {
  // Implementation for rating a beer goes here
};

// Function to handle updating a beer
const updateBeer = async (beer) => {
  // Implementation for updating a beer goes here
};

// Function to handle deleting a beer
const deleteBeer = async (beer) => {
  // Implementation for deleting a beer goes here
};
</script>

<style>

</style>
