// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path';
export default defineNuxtConfig({
  app:{
    head : {
      title: "MovieMingle | Find your favourite movie",
      meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "description", content : "MovieMingle is your #1 destination for all movies & series. Find the movies you love."
      }],
      htmlAttrs: {
        lang: 'en'
      },
    }
  },
  devtools: { enabled: true },
  alias: {
    '@' : resolve(__dirname, "/") 
  },
  css:["~/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})