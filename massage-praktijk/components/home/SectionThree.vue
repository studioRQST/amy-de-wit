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
      duration: 2,
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
        <p>Jouw herstel is <span>mijn missie.</span></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 5rem;
  padding-left: 2rem;
  padding-bottom: 5rem;
}

.container {
  display: flex;
}

text {
  display: flex;
}

span {
  display: block;
}

.text > p {
  text-align: left;
  line-height: 4rem;
  font-size: 2rem;
  width: 100vw;
  background: linear-gradient(
      to right,
      #1D5983 50%,
      #9C866C 10% /* Changed color here */
  );
  background-size: 400% 100%;
  background-position-x: 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}


@media (min-width: 48rem) {
  section {
    height: 30vh;
    width: 100vw;
    padding-top: 15rem;
    padding-bottom: 25rem;
    padding-left: 0;
  }

  span {
    display: inline;
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
    font-size: 3rem;
    width: 100vw;
    background: linear-gradient(
        to right,
        #1D5983 50%,
        #9C866C 10% /* Changed color here */
    );
    background-size: 400% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }


}

@media (min-width: 70rem) {
  section {
    height: 30vh;
    width: 100vw;
    padding-top: 15rem;
    padding-bottom: 25rem;
  }

  span {
    display: inline;
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
        #1D5983 50%,
        #9C866C 10% /* Changed color here */
    );
    background-size: 400% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

}

@media (min-width: 90rem) {


}


</style>