<template>
    <MovieDetailCard :movie="movie"/>
</template>

<script setup>
const { id } = useRoute().params;
const imdbId = `https://www.imdb.com/title/${id}`;
const uri = `https://www.omdbapi.com/?apikey=36cd9012&i=${id}` ;
const { data: movie } = await useFetch(uri);

</script>
