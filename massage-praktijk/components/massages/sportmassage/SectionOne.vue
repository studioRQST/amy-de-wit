<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper-text">
    <h1>Sport<span>massage</span></h1>
    <h2>Optimaliseer jouw prestaties!</h2>
    <h3>Ontdek de Voordelen van Sportmassage</h3>
    <p>Welkom op de pagina gewijd aan sportmassage bij Massagepraktijk Amy de Wit. Een sportmassage is een doeltreffende
      behandeling die zich richt op het optimaliseren van jouw prestaties door zowel voor als na het sporten te
      ondersteunen. </p>
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
  gap: 1.5rem;
  margin-left: 1.5rem;
}

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

h2 {
  color: var(--secondary);
}

.image-overlay div{
  overflow: clip;
  width: 100%;
  height: 18rem;
  background-color: var(--secondary);
  margin-top: 2rem;
}

.image-overlay img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

</style>