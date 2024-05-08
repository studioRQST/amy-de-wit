<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container-text">
      <div class="flex-wrapper">
        <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
        <h1>Lymfe<span>drainage</span></h1>
      </div>
      <h2>Stimuleer je natuurlijke herstel</h2>
    </div>

    <div class="flex-wrapper-image">
      <div class="flex-wrapper-text">
        <h3>Ontdek de Zachte Kracht van Lymfedrainage</h3>
        <p>Welkom op de pagina gewijd aan lymfedrainage bij Massagepraktijk Amy de Wit. Lymfedrainage is een bijzonder
          effectieve massagebehandeling die gericht is op het stimuleren van het lymfestelsel, wat essentieel is voor het
          afvoeren van vocht en afvalstoffen uit het lichaam.</p>
      </div>
    <div class="image-overlay">
      <div>
        <img src="/static/images/lymfedrainage-2.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 8rem;
}


h2 {
  font-size: 3rem;
  line-height: 3rem;
  color: var(--secondary);
}

p, h3 {
  margin: 0 1.5rem 1rem 1.5rem;
}

.flex-container-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.5rem 2rem 1.5rem;
}

.flex-container-text img {
  display: none;
}

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

.flex-wrapper-text h3{
  margin-top: 1rem;
}

.flex-wrapper-text p{
  margin-bottom: 3rem;
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

@media only screen and (min-width: 40rem) {

  .flex-container-text {
    gap: 1rem;
    margin: 0 1.5rem 2rem 3rem;
  }

  h1 {
    margin-left: 3rem;
  }

  h2, h3 {
    margin-left: 4.5rem;
  }

  h3, p{
    margin-left: 7.5rem;
  }

  .flex-wrapper{
    display: flex;
    flex-direction: row;
  }

  .flex-container-text img {
    display: inline;
    width: 1.5rem;
  }

  span {
    display: inline;
  }

  .flex-wrapper-image {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  .image-overlay div {
    width: 15rem;
      height: 15rem;
  }
}

@media only screen and (min-width: 70rem) {

  section {
    margin-top: 12rem;
  }

  h2 {
    margin-left: 6rem;
    font-size: 4.5rem;
  }

  .flex-container-text img {
    width: 2rem;
    margin-right: 1rem
  }

  .flex-container-text {
    margin-left: 4rem;
  }

  .flex-wrapper-image {
    margin-top: 5rem;
    gap: 5rem;
  }

  .flex-wrapper-text {
    margin-left: 2.5rem;
  }

  .image-overlay div {
    margin-top: 1rem;
    width: 25rem;
    height: 25rem;
  }
}

@media only screen and (min-width: 90rem) {

  section {
    margin-top: 14rem;
  }

  h2 {
    margin-left: 12rem;
  }

  .flex-container-text img {
    margin-right: 7rem
  }

  .flex-container-text {
    margin-left: 4rem;
  }

  .flex-wrapper-image {
    margin-left: 6rem;
  }

  .image-overlay div {
    width: 35rem;
    height: 30rem;
  }
}

</style>