<script>
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: window,
    });

    // Define GSAP animation with ScrollTrigger
    gsap.to(".text p", {
      backgroundPositionX: "0%",
      duration: 3,
      scrollTrigger: {
        trigger: ".text",
        scrub: 1.5,
        start: "top 80%",
        end: "bottom top",
      },
    });

    // Extra fancy effects
    gsap.to(".text p", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".text",
        start: "top 80%",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }
});
</script>

<template>
  <section>
    <div class="container">
      <div class="text">
        <p>Jouw herstel is mijn missie!</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

section {
  padding: 10rem 2rem;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text > p {
  text-align: center;
  background: linear-gradient(
      to right,
      #1D5983 50%,
      #EFE6DC 10%
  );
  background-size: 400% 100%;
  background-position-x: 100%;
  color: transparent;
  background-clip: text;
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 4rem;
  line-height: 4rem;
}

@media (min-width: 40rem) {
  section {
    padding: 20rem 5rem;
  }

  .text > p {
    font-size: 6rem;
    line-height: 6rem;
  }
}

@media (min-width: 70rem) {
  section {
    padding: 25rem 5rem;
  }

  .text > p {
    font-size: 8rem;
    line-height: 8rem;
  }
}

@media (min-width: 90rem) {
  section {
    padding: 30rem 5rem;
  }
}


</style>