<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "Rasanya Pulih",
    description:
      "Camilan lembut yang dirancang untuk memberi kamu momen pause di tengah hari.",
  }
);
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-cream">
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 bg-forest translate-x-[30%] -translate-y-[30%]" />
    <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 bg-forest -translate-x-[30%] translate-y-[30%]" />

    <div class="flex flex-col items-center justify-center z-10 px-20 text-center">
      <h1 class="text-8xl font-black mb-8 leading-tight text-forest">
        {{ title }}
      </h1>
      <p class="text-3xl font-medium max-w-4xl leading-relaxed text-forest opacity-80">
        {{ description }}
      </p>
    </div>

    <div class="absolute bottom-12 right-12 px-8 py-4 rounded-full text-2xl font-bold bg-forest text-cream">
      rasanya-pulih.com
    </div>
  </div>
</template>
