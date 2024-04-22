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
      <h3>Sportmassage</h3>
      <h4>Optimaliseer Jouw Prestaties met Sportmassagee</h4>
      <p>Sportmassage is een dynamische massagebehandeling die specifiek gericht is op het verbeteren van de
        doorbloeding van de spieren, het verminderen van spierspanning en het bevorderen van herstel na fysieke
        activiteit. Of je nu een atleet bent die zijn prestaties wil verbeteren of gewoon op zoek bent naar verlichting
        van spierpijn en spanning, sportmassage kan helpen om jouw lichaam te ondersteunen en te versterken.</p>
        <nuxt-link href="/massage/sportmassage" aria-label="Link naar pagina sportmassage">
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

</style>