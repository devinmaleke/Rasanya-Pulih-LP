<template>
  <section
    id="night-ritual"
    class="min-h-screen bg-cream px-6 py-24 flex items-center"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-4xl font-fraunces font-semibold text-forest mb-6 tracking-wide"
        data-aos="fade-down"
      >
        Jeda Ritual
      </h2>

      <p
        class="text-lg md:text-xl text-forest italic mb-12 leading-relaxed font-cormorant"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Pause is a personal space, and everyone has their own way of entering it.
      </p>

<div
class="mx-auto max-w-4xl mb-16 overflow-hidden"
data-aos="fade-up"
data-aos-delay="250"
>
<img
src="/jeda-ritual-img.png"
alt="Jeda ritual moment"
class="w-full h-auto object-cover"
/>
</div>


<!-- Ritual Content -->
<div
class="relative mx-auto max-w-3xl rounded-3xl bg-cream backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-12 py-14 text-center"
data-aos="zoom-in"
data-aos-delay="350"
>
<p class="font-fraunces text-sm uppercase tracking-widest text-forest/60 mb-4">
A Gentle Guide
</p>


<p class="font-fraunces text-2xl text-forest mb-10 leading-snug">
Let’s start your Jeda
</p>


<div class="space-y-10 text-forest font-cormorant text-lg leading-relaxed max-w-xl mx-auto">
<div class="flex flex-col items-center gap-3">
<span class="font-fraunces text-forest/40 text-lg">01</span>
<p>
Take a breath. Realize that this moment is just you and your breath.
</p>
</div>


<div class="flex flex-col items-center gap-3">
<span class="font-fraunces text-forest/40 text-lg">02</span>
<p>
Take a bite, find the hint of jasmine and separate it from the chocolate flavor. 
</p>
</div>


<div class="flex flex-col items-center gap-3">
<span class="font-fraunces text-forest/40 text-lg">03</span>
<p>
Let yourself to take a pause.
</p>
</div>
</div>
</div>

      
      <!-- <div
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
        />

        <div
          class="absolute inset-0 bg-linear-to-t from-forest/40 to-transparent pointer-events-none"
        />

        <div
          class="absolute bottom-4 right-4 bg-white/70 px-3 py-1 rounded-full text-sm text-forest opacity-70 group-hover:opacity-100 transition"
        >
          Tap to unmute
        </div>
      </div> -->

      <div class="mt-12" data-aos="fade-up" data-aos-delay="450">
        <a
          href="https://wa.me/6281299593663?text=Halo,%20saya%20ingin%20mulai%20Pause%20Ritual."
          target="_blank"
          class="inline-block px-8 py-4 rounded-full bg-forest text-cream font-fraunces text-lg shadow-lg hover:bg-[#2a3732] hover:shadow-xl transition-all"
        >
          Start Your Jeda
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
