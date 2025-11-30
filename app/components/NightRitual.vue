<template>
  <section
    id="night-ritual"
    class="min-h-screen bg-[#fff7d7] px-6 py-24 flex items-center"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-4xl font-fraunces font-semibold text-[#33443E] mb-6 tracking-wide"
        data-aos="fade-down"
      >
        Pause Ritual
      </h2>

      <p
        class="text-lg md:text-xl text-[#33443E] italic mb-12 leading-relaxed font-cormorant"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        If you want to pause deeper, breaths....
      </p>

      <div
        class="relative mx-auto rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl cursor-pointer group"
        data-aos="zoom-in"
        data-aos-delay="300"
        @click="unmuteVideo"
      >
        <video
          ref="pauseVideo"
          src="/pause-ritual.mp4"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-auto object-cover"
        ></video>

        <div
          class="absolute inset-0 bg-gradient-to-t from-[#33443E]/40 to-transparent pointer-events-none"
        ></div>

        <!-- Small hint to unmute -->
        <div
          class="absolute bottom-4 right-4 bg-white/70 px-3 py-1 rounded-full text-sm text-[#33443E] opacity-70 group-hover:opacity-100 transition"
        >
          Tap to unmute
        </div>
      </div>

      <div class="mt-12" data-aos="fade-up" data-aos-delay="450">
        <a
          href="https://wa.me/6281299593663?text=Halo,%20saya%20ingin%20mulai%20Pause%20Ritual."
          target="_blank"
          class="inline-block px-8 py-4 rounded-full bg-[#33443E] text-[#fff7d7] font-fraunces text-lg shadow-lg hover:bg-[#2a3732] hover:shadow-xl transition-all"
        >
          Start Your Pause
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const pauseVideo = ref(null);

const unmuteVideo = () => {
  if (pauseVideo.value) {
    pauseVideo.value.muted = false;
    pauseVideo.value.play();
  }
};
</script>
