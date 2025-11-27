<template>
  <section
    id="you-us"
    class="min-h-screen flex items-center justify-center px-6 py-24 relative bg-[#fff7d7]"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center opacity-80"
    ></div>

    <!-- Optional Soft Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#fff7d7]/20 to-[#fff7d7]/70"
    ></div>

    <div
      class="relative max-w-3xl text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- Logo -->
      <img
        src="/logo.png"
        alt="Rasanya Pulih Logo"
        class="mx-auto mb-6 w-50 md:w-50"
        data-aos="fade-up"
        data-aos-delay="50"
      />

      <h1
        class="text-4xl md:text-5xl font-semibold tracking-wide mb-6 text-[#33443E] font-fraunces"
        data-aos="fade-down"
      >
        RASANYA PULIH
      </h1>

      <p
        class="text-lg md:text-xl text-[#33443E] leading-relaxed font-cormorant font-regular"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Rasanya Pulih began with a simple belief: everyone deserves a moment to
        slow down. In a world that moves too fast, we wanted to craft a cookie
        that brings comfort—light, honest, and guilt-free. A small bite to
        breathe, reconnect, and feel whole again.
      </p>
    </div>
  </section>
</template>
