<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <div class="flex-wrapper">
        <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
        <h1><span class="span-brown">Ontdek</span> mijn massages </h1>
      </div>
    </div>


    <div class="flex-container-intro">
      <div class="flex-wrapper-intro">
        <h3>Welkom bij Massagepraktijk Amy de Wit</h3>
        <p>In mijn praktijk focus ik mij op twee effectieve massagebehandelingen die specifiek zijn ontworpen om herstel
          en
          welzijn te bevorderen.</p>
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
section {
  margin-top: 8rem;
}

h3, p {
  margin-top: 2rem;
}

.flex-container, .flex-wrapper-intro {
  padding-left: 1.5rem;
}

.flex-container img {
  display: none;
}

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

.span-brown {
  color: var(--secondary);
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


@media only screen and (min-width: 48rem) {
  h1 {
    margin-left: 1.5rem;
    font-size: 6rem;
    line-height: 6rem;
  }

  .flex-container img {
    display: inline;
    margin-bottom: 6rem;
  }

  .flex-wrapper {
    display: flex;
    flex-direction: row;

  }

  .flex-container-intro {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 2.5rem;

  }

  .flex-wrapper-intro p {
    width: 50%;
  }

  .image-overlay div {
    overflow: clip;
    position: absolute;
    width: 15rem;
    height: 15rem;
    margin-left: -15rem;

  }


}

@media (min-width: 70rem) {
  section {

  }
}

@media (min-width: 90rem) {
  section {
    margin-left: 3rem;
  }

  h1 {

    margin-left: 6rem;
  }

  .flex-container img {
    width: 2rem;
  }

  .flex-wrapper-intro {
    margin-left: 5.5rem;
  }

  .flex-wrapper-intro p {
    width: 40%;
  }

  .image-overlay img {
    margin-left: -29rem;
    width: 35%;
    height: 25rem;
    top: -30%;
  }
}

</style>