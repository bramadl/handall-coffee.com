import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/css/tailwindcss.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  typescript: {
    shim: false,
  },
});
