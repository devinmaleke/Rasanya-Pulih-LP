<template>
  <section
    id="night-ritual"
    class="min-h-screen bg-[#33443E] px-6 py-24 flex items-center"
  >
    <div class="max-w-4xl mx-auto text-center">
      <!-- Title -->
      <h2
        class="text-4xl font-fraunces font-semibold text-[#f4d96c] mb-6 tracking-wide"
        data-aos="fade-down"
      >
        Pause Ritual
      </h2>

      <!-- Microcopy -->
      <p
        class="text-lg md:text-xl text-[#f4d96c] italic mb-12 leading-relaxed font-cormorant"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        If you want to pause deeper, breaths....
      </p>

      <!-- Video Container -->
      <div
        class="relative mx-auto rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <video
          src="/pause-ritual.mp4"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-auto object-cover"
        ></video>

        <!-- Soft Gradient Overlay (optional aesthetic glow) -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#33443E]/40 to-transparent pointer-events-none"
        ></div>
      </div>
    </div>
  </section>
</template>
