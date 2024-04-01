<template>
  <div class="container mx-auto py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-3xl font-bold">Beer List</h1>
    </div>

    <div class="flex flex-col md:flex-row">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4">
        <!-- Beer list -->
        <div v-for="beer in products" :key="beer._id" class="hover:bg-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between border border-gray-200 bg-white relative">
          <!-- Close button -->
          <button @click="deleteBeer(beer)" class="absolute top-2 right-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M14.586 5.586a2 2 0 0 1 0 2.828L12.414 10l2.172 2.172a2 2 0 1 1-2.828 2.828L10 12.828l-2.172 2.172a2 2 0 1 1-2.828-2.828L7.172 10 5 7.828a2 2 0 1 1 2.828-2.828L10 7.172l2.172-2.172a2 2 0 0 1 2.414 0z"/>
            </svg>
          </button>
          <!-- Beer details -->
          <router-link :to="'/beers/' + beer._id" class="block">
            <div>
              <h2 class="text-xl font-semibold mb-2">{{ beer.name }}</h2>
              <p class="text-gray-600">{{ beer.type }}</p>
            </div>
            <div class="flex items-center mt-2 justify-between">
              <div class="flex items-center">
                <button @click="deleteBeer(beer)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 0a1 1 0 0 1 .79.38l3.95 5.5 6.01.88a1 1 0 0 1 .55 1.7l-4.36 4.25 1.03 6a1 1 0 0 1-1.45 1.05L10 16.63l-5.12 2.84a1 1 0 0 1-1.45-1.05l1.03-6-4.36-4.25a1 1 0 0 1 .55-1.7l6.01-.88L9.21.38A1 1 0 0 1 10 0zm0 2.5L8.93 6.44a1 1 0 0 1-.74.55l-4.42.64 3.2 3.12a1 1 0 0 1 .29.89l-.76 4.48 4.23-2.35a1 1 0 0 1 .96 0l4.23 2.35-.76-4.48a1 1 0 0 1 .29-.89l3.2-3.12-4.42-.64a1 1 0 0 1-.74-.55L10 2.5z"/>
                </svg>
              </button>
                <span class="text-sm text-gray-700">{{ beer.rating.toFixed(1) }} ({{ beer.totalRatings }} ratings)</span>
              </div>
            </div>

          </router-link>
        </div>
      </div>

      <div class="md:w-1/4 md:pl-4">
  <!-- New Beer Form Card -->
  <div class="bg-white rounded-lg shadow-md flex flex-col justify-between border border-gray-200 p-6">
    <h2 class="text-2xl font-bold mb-4">New Beer</h2>
    <form @submit.prevent="createNewBeer">
      <div class="mb-4">
        <label for="beerName" class="block text-sm font-medium text-gray-700">Beer Name</label>
        <input type="text" id="beerName" v-model="newBeer.name" placeholder="Castle" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="beerType" class="block text-sm font-medium text-gray-700">Beer Type</label>
        <input type="text" id="beerType" v-model="newBeer.type" placeholder="Lager" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="beerRating" class="block text-sm font-medium text-gray-700">Beer Rating</label>
        <input type="number" id="beerRating" min="1" max="5" placeholder="3" v-model="newBeer.rating" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="flex justify-end">
        <PrimaryButton type="submit">+ New Beer</PrimaryButton>
      </div>
    </form>
    <p v-if="successMessage" class="text-green-600 mt-2">Beer successfully added!</p>
  </div>
</div>

    </div>
  </div>
</template>



<script setup>

// Fetch beer data from the backend
const { data: products, refresh } = useFetch('https://web-base-backend-js.vercel.app/api/products/');

const newBeer = {
  name: '',
  type: '',
  rating: null,
};

const successMessage = ref('');

// Function to handle creating a new beer
const createNewBeer = async () => {
  try {
    const response = await fetch('https://web-base-backend-js.vercel.app/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newBeer.name,
        type: newBeer.type,
        rating: newBeer.rating,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create new beer');
    }

    // Clear the form fields
    newBeer.name = '';
    newBeer.type = '';
    newBeer.rating = null;

    // Display success message
    successMessage.value = 'Beer successfully added!';

    // Refresh the beer list
    refresh();
  } catch (error) {
    console.error('Error creating new beer:', error.message);
  }
};

const deleteBeer = async (beer) => {
  const confirmation = window.confirm('Are you sure you want to delete this beer?');
  if (confirmation) {
    try {
      const response = await fetch(`https://web-base-backend-js.vercel.app/api/products/${beer._id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Deletion successful, handle the response
        refresh(); // Refresh the beer list after deletion
     
      } else {
        // Deletion failed, handle the error
        console.error('Error deleting beer:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting beer:', error.message);
    }
  }
};

</script>

<style>
/* Add your custom styles here */
</style>
