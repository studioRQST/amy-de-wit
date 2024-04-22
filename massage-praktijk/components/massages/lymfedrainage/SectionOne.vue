<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper-text">
      <h1>Lymfe<span>drainage</span></h1>
      <h2>Stimuleer je natuurlijke herstel</h2>
      <h3>Ontdek de Zachte Kracht van Lymfedrainage</h3>
      <p>Welkom op de pagina gewijd aan lymfedrainage bij Massagepraktijk Amy de Wit. Lymfedrainage is een bijzonder
        effectieve massagebehandeling die gericht is op het stimuleren van het lymfestelsel, wat essentieel is voor het
        afvoeren van vocht en afvalstoffen uit het lichaam.</p>
    </div>

    <div class="image-overlay">
      <div>
        <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 8rem;
}

.flex-wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.5rem 4rem 1.5rem;
}

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

h2 {
  font-size: 3rem;
  line-height: 3rem;
  color: var(--secondary);
}

.flex-wrapper-text h3{
  margin-top: 1rem;
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

</style>