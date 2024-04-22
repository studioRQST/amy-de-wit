<script setup lang="ts">

</script>

<template>
  <section>
    <h2>Persoonlijk <span>advies</span> en <span>begeleiding</span></h2>
    <div class="container-text">
      <p>
        <h3>Jouw Weg naar Optimaal Herstel</h3>
        Nadat ik jouw persoonlijke situatie heb geëvalueerd, werk ik samen met jou aan een aangepast stappenplan om de
        massage perfect af te stemmen op jouw sportieve behoeften. Als er specifieke klachten zijn, kan ik je ook
        adviseren om een fysiotherapeut, huisarts of sportarts te raadplegen voor verdere behandeling.
      </p>
      <p class="p-bold">Een bezoek aan de sportmasseur wordt niet vergoed door de zorgverzekeraar.</p>
    </div>
  </section>

  <div class="image-overlay">
    <div>
      <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
    </div>
  </div>
</template>

<style scoped>
section {
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 1.5rem;
}

span {
  font-family: bebas-neue-pro, sans-serif;
  color: var(--secondary);
}

.container-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.p-bold {
  font-weight: bold;
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