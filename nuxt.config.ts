import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/seo", "@nuxt/eslint"],
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    provider: "google",
  },
  
  site: {
    url: process.env.NUXT_BASE_URL,
    name: "Rasanya Pulih",
    description: "Camilan lembut yang dirancang untuk memberi kamu momen pause di tengah hari. Dibuat dari bahan alami, bebas gluten, dan rendah guilt — cocok sebagai teman me-time, hadiah, atau hampers spesial.",
    indexable: false,
  },

  sitemap: {
    enabled: true,
    autoLastmod: true,
    exclude: [],
  },

  robots: {
    enabled: true,
    groups: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  },

  ogImage: {
    enabled: true,
  },

});
