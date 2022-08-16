import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
        },
      ],
    },
  },
  css: ["@/assets/css/tailwindcss.css"],
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    shim: false,
  },
});
