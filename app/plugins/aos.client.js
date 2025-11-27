import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-quart",
    });
  }
});
