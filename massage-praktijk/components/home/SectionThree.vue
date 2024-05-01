<script>
import {defineComponent} from 'vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export default defineComponent({
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: window, // Set the scroller to window
    });

    // Define GSAP animation with ScrollTrigger
    gsap.to(".text p", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".text",
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  }
});
</script>


<template>
  <section>
    <div class="container">
      <div class="text">
        <p>Jouw herstel is mijn missie.</p>


      </div>
    </div>
  </section>
</template>

<style scoped>


@media (min-width: 48rem) {


}

@media (min-width: 70rem) {


}

@media (min-width: 90rem) {


  section {
    height: 30vw;
    width: 100vh;
    padding-top: 20rem;
    padding-bottom: 20rem;
  }

  .container {
    display: flex;
  }

  text {
    display: flex;
    justify-content: center;
    align-items: center;

  }



  .text > p {
    text-align: center;
    line-height: 10rem;
    font-size: 5rem;
    width: 100vw;
    background: linear-gradient(
        to right,
        rgb(255, 255, 255) 50%,
        rgb(37, 37, 37) 50%
    );
    background-size: 400% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;


  }

}


</style>