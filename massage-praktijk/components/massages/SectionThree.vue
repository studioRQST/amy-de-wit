<script setup lang="ts">

</script>

<template>
  <section class="card-element">
    <div class="image-overlay">
      <div>
        <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
    <div class="image-description">
      <h3>Lymfedrainage</h3>
      <h4>Ontdek de Zachte Kracht van Lymfedrainage</h4>
      <p>Lymfedrainage is een zachte en effectieve massagebehandeling die gericht is op het stimuleren van het
        lymfestelsel. Door zachte, ritmische bewegingen worden vocht en afvalstoffen afgevoerd, wordt het immuunsysteem
        gestimuleerd en wordt het lichaam in balans gebracht. Deze massage is ideaal voor het verminderen van zwelling,
        het bevorderen van ontgifting en het ondersteunen van het algemene welzijn.</p>
        <nuxt-link href="/massage/lymfedrainage" aria-label="Link naar pagina Lymfedrainage">
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
}

.image-description h4 {
  margin: 1rem 0;
}

.image-description button {
  margin: 2rem 0;
}

@media only screen and (min-width: 48rem) {
  .card-element {
    margin-left: 5rem;
  }

  .image-description {
    width: 55%;
  }
}

@media (min-width: 70rem) {
  section {
    margin-top: 3rem;
    padding-left: 10rem;
  }
}

</style>