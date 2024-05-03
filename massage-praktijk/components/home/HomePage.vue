<script>
import gsap from 'gsap';

export default {
  mounted() {
    // Selecteer alle secties
    const sections = document.querySelectorAll('.section');

    // Voeg een scroll-eventlistener toe aan het venster
    window.addEventListener('scroll', function () {
      // Loop door elke sectie
      sections.forEach(section => {
        // Bereken de afstand van de sectie tot de bovenkant van het venster
        const top = section.getBoundingClientRect().top;
        // Bereken de hoogte van het venster
        const screenHeight = window.innerHeight;
        // Bereken de huidige scrollpositie
        const scrollPosition = window.scrollY;

        // Bereken de afstand van de sectie tot het midden van het scherm
        const distanceToCenter = top - screenHeight / 2 + section.offsetHeight / 2;

        // Controleer of de sectie vóór of na de derde sectie ligt
        const isAfterThirdSection = Array.from(sections).indexOf(section) >= 3;

        // Stop de animatie als de sectie na de derde sectie ligt
        if (isAfterThirdSection) return;

        // Bereken de schaal op basis van de afstand tot het midden van het scherm
        const scale = 1 - Math.abs(distanceToCenter) / screenHeight * 0.6; // Minder dramatische schaalverandering

        // Pas de transformatie toe op de sectie met GSAP
        gsap.to(section, { scale: scale, duration: 1 }); // Vertraag de animatie naar 1 seconde
      });
    });
  }
};
</script>

<template>
  <div class="slide-container">
    <div class="section section-one">
      <HomeSectionOne/>
    </div>
    <div class="section section-two">
      <HomeSectionTwo/>
    </div>
    <div class="section section-three">
      <HomeSectionThree/>
    </div>
    <div class="section section-four">
      <HomeSectionFour/>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  height: 500vh; 
}

.section {
  height: 100vh;
}

.section-one {
  background-color: var(--background-color);
  height: 100vh;
}

.section-two {
  background-color: var(--background-color);
  height: auto;
}

</style>

