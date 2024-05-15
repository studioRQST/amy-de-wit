<script setup lang="ts">

</script>

<template>
  <section class="card-element">
    <div class="image-overlay">
      <div>
        <img src="/static/images/voetreflex-2.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
    <div class="image-description">
      <h3>Voetreflex massage</h3>
      <h4>Verken de genezende kracht van voetreflexpunten</h4>
      <p>Voetreflexmassage is een therapeutische massagebehandeling die gebaseerd is op de principes van reflexologie.
        Volgens deze principes zijn bepaalde reflexpunten in de voeten verbonden met specifieke organen en
        lichaamsdelen. Door deze punten te stimuleren, kan de energiestroom in het lichaam worden hersteld en kunnen
        blokkades worden opgeheven, wat leidt tot fysieke en mentale ontspanning en welzijn.</p>
      <nuxt-link href="/massage/voetreflex" aria-label="Link naar pagina sportmassage">
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
  padding: 1.5rem 1.5rem 5rem 1.5rem;
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
    margin-left: 5rem;
  }
}

@media (min-width: 70rem) {
  section {
    margin-top: 2rem;
    padding-left: 10rem;
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
    padding: 1.5rem 1.5rem 10rem 10rem;
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