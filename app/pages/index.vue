<script setup lang="ts">

defineOgImageComponent("RasanyaPulih", {
  title: "Rasanya Pulih",
  description:
    "Camilan lembut yang dirancang untuk memberi kamu momen pause di tengah hari. Dibuat dari bahan alami, bebas gluten, dan rendah guilt.",
});

useSeoMeta({
  title: "Rasanya Pulih - Cookies Lembut untuk Momen Pause Anda",
  description:
    "Camilan lembut yang dirancang untuk memberi kamu momen pause di tengah hari. Dibuat dari bahan alami, bebas gluten, dan rendah guilt — cocok sebagai teman me-time, hadiah, atau hampers spesial.",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  {
    "@type": "WebSite",
    name: "Rasanya Pulih",
    url: "https://rasanya-pulih.com",
    description:
      "Cookies lembut dari bahan alami, bebas gluten, dan rendah guilt untuk momen pause Anda",
  },
  {
    "@type": "Organization",
    name: "Rasanya Pulih",
    url: "https://rasanya-pulih.com",
    logo: "https://rasanya-pulih.com/logo.png",
  },
]);
</script>

<template>
  <div class="w-full">
    <SectionYouUs />
    <SectionNightRitual />
    <SectionContact />
  </div>
</template>
