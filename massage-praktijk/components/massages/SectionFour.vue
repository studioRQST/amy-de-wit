<script setup lang="ts">

</script>

<template>
  <section class="card-element">
    <div class="image-overlay">
      <div>
        <img src="/static/images/sportmassage-4.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
    <div class="image-description">
      <h3>Sportmassage</h3>
      <h4>Optimaliseer Jouw Prestaties met Sportmassage</h4>
      <p>Sportmassage is een dynamische massagebehandeling die specifiek gericht is op het verbeteren van de
        doorbloeding van de spieren, het verminderen van spierspanning en het bevorderen van herstel na fysieke
        activiteit. Of je nu een atleet bent die zijn prestaties wil verbeteren of gewoon op zoek bent naar verlichting
        van spierpijn en spanning, sportmassage kan helpen om jouw lichaam te ondersteunen en te versterken.</p>
        <nuxt-link href="/massages/sportmassage" aria-label="Link naar pagina sportmassage">
            <button class="primary-button">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Lees meer</span>
            </button>
        </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 1.5rem;
}

.image-overlay div {
  overflow: clip;
  width: 22rem;
  height: 18rem;
  background-color: var(--secondary);
}

.image-overlay img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.image-description {
  margin: 2.5rem 0;
  max-width: 22rem;
}

.image-description h4 {
  margin: 1rem 0;
}

.image-description button {
  margin: 2rem 0;
}

@media only screen and (min-width: 40rem) {
  .card-element {
    margin-left: 18rem;
  }
}

@media (min-width: 70rem) {
  section {
    margin-top: 2rem;
    padding-left: 18rem;
  }

  .image-overlay div {
    height: 20rem;
    width: 30rem;
  }

  .image-description {
    max-width: 30rem;
  }
}

@media (min-width: 90rem) {
  section {
    padding-left: 28rem;
  }

  .image-overlay div {
    height: 25rem;
    width: 35rem;
  }

  .image-description {
    max-width: 35rem;
  }
}

</style>