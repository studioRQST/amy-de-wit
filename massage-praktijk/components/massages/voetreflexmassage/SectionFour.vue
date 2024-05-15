<script setup lang="ts">

</script>


<template>
  <section>
    <div class="container-text">
      <h2>Voor <span>wie</span> is voetreflex massage</h2>

      <h3>Verlichting voor Iedereen</h3>
    </div>


    <div class="flex-wrapper-image">
      <div class="flex-wrapper-text">
        <p>

          Voetreflexmassage is een effectieve techniek gericht op herstel en verlichting, zelfs zonder specifieke
          klachten. Het helpt het lichaam te herstellen en bevordert de algehele gezondheid. Of je nu last hebt van
          acute of chronische klachten, voetreflexmassage kan verlichting bieden en het herstelproces ondersteunen. Het
          is een waardevolle behandeling voor iedereen die streeft naar een gezond en evenwichtig leven.
        </p>
      </div>
      <div class="image-overlay">
        <div>
          <img src="/static/images/voetreflex-1.avif" alt="Afbeelding Lymfedrainage">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

span {
  font-family: bebas-neue-pro, sans-serif;
  color: var(--secondary);
}

.container-text {
  display: flex;
  flex-direction: column;
  margin: 5rem 1.5rem 0 1.5rem;
  gap: 2rem;
}

.flex-wrapper-text {
  margin: 1rem 1.5rem 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-overlay div {
  overflow: clip;
  width: 100%;
  height: 18rem;
  background-color: var(--secondary);
  margin-top: 2rem;
}

.image-overlay img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

@media only screen and (min-width: 48rem) {


  .flex-wrapper-image {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .flex-wrapper-text p, h3 {
    width: 50%;
  }

  .image-overlay div {
    width: 20rem;
    height: 20rem;
    position: absolute;
    margin-left: -19rem;
  }
}

@media only screen and (min-width: 70rem) {
  h2 {
    margin-bottom: 2rem;
  }

  section {
    margin-left: 2.5rem;
    margin-bottom: 8rem;
  }


  .image-overlay div {
    margin-left: -25rem;
    margin-top: -1rem;
    width: 25rem;
    height: 25rem;
  }
}

@media only screen and (min-width: 90rem) {
  section {
    margin-bottom: 15rem;
  }

  .image-overlay div {
    margin-left: -30rem;
    width: 30rem;
    height: 30rem;
  }
}

</style>