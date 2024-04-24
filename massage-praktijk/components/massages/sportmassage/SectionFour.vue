<script setup lang="ts">

</script>


<template>
  <section>
    <div class="container-text">
      <h2>Persoonlijk <span>advies</span> en <span>begeleiding</span></h2>

      <h3>Jouw Weg naar Optimaal Herstel</h3>
    </div>


    <div class="flex-wrapper-image">
      <div class="flex-wrapper-text">
        <p>

          Nadat ik jouw persoonlijke situatie heb geëvalueerd, werk ik samen met jou aan een aangepast stappenplan om de
          massage perfect af te stemmen op jouw sportieve behoeften. Als er specifieke klachten zijn, kan ik je ook
          adviseren om een fysiotherapeut, huisarts of sportarts te raadplegen voor verdere behandeling.
        </p>
        <h3>
          Een bezoek aan de sportmasseur wordt niet vergoed door de zorgverzekeraar.</h3>
      </div>
      <div class="image-overlay">
        <div>
          <img src="/static/images/sportmassage-3.avif" alt="Afbeelding Lymfedrainage">
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
  margin-top: 4rem;
  margin-left: 1.5rem;
  gap: 1rem;
}

.flex-wrapper-text {
  margin-top: 1rem;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-overlay div {
  overflow: clip;
  width: 150%;
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

  .image-overlay img {
    width: 40%;
    height: 80%;
    position: absolute;
    margin-left: -19rem;
  }
}
</style>