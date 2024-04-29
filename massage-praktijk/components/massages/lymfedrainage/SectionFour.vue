<script setup lang="ts">

</script>

<template>
  <section>
    <div class="container-text">
      <h2><span>Lymfe</span> taping</h2>

      <h3>Herstel en Verlichting voor Weefselschade</h3>
    </div>


    <div class="flex-wrapper-image">
      <div class="flex-wrapper-text">
        <p>
          Herstel en Verlichting voor Weefselschade
          Lymfe taping is een geavanceerde techniek waarbij elastisch tape wordt gebruikt om vochtafvoer te bevorderen
          en
          bindweefselproblemen te verminderen. Bij Massagepraktijk Amy de Wit wordt deze methode toegepast als
          effectieve
          aanvulling op de behandeling van verschillende aandoeningen, waaronder sportblessures, littekens en
          postoperatief herstel. Het huidvriendelijke en waterbestendige tape blijft enkele dagen zitten, wat zorgt voor
          langdurige ondersteuning bij het herstelproces.
        </p>
        <p>Bij Massagepraktijk Amy de Wit wordt deze methode toegepast als effectieve aanvulling op de behandeling van
          verschillende aandoeningen, waaronder sportblessures, littekens en postoperatief herstel. Het huidvriendelijke
          en waterbestendige tape blijft enkele dagen zitten, wat zorgt voor langdurige ondersteuning bij het
          herstelproces.</p>
      </div>
      <div class="image-overlay">
        <div>
          <img src="/static/images/lymfedrainage-3.avif" alt="Afbeelding Lymfedrainage">
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
  margin: 2rem 1.5rem 5rem 1.5rem;
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
  height: 130%;
  opacity: 0.8;
}

@media only screen and (min-width: 48rem) {
  .flex-wrapper-image {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .flex-wrapper-text p {
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
  section {
    margin-left: 2.5rem;
    margin-bottom: 8rem;
  }

  .image-overlay div {
    margin-left: -25rem;
    width: 25rem;
    height: 25rem;
  }
}

@media only screen and (min-width: 90rem) {

  .image-overlay div {
    margin-left: -30rem;
    width: 30rem;
    height: 30rem;
  }
}

</style>