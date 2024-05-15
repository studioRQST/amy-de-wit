<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <div class="flex-wrapper">
        <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
        <h1><span class="span-brown">Ontdek</span><span>mijn</span>massages</h1>
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
          <img src="/static/images/sportmassage.avif" alt="Afbeelding Lymfedrainage">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

  section {
    padding: 8rem 0 2rem 0;
  }

  h1{
    display: flex;
    gap: 0 1rem;
    flex-wrap: wrap;
  }

  h3, p {
    margin-top: 2rem;
  }

  .flex-container, .flex-wrapper-intro {
    padding: 0 1.5rem;
  }

  .flex-wrapper-intro p {
    margin-bottom: 3rem;
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
    height: 120%;
    opacity: 0.8;
  }


  @media only screen and (min-width: 40rem) {

    h1 {
      padding: 2rem 3rem 2rem 3rem;
      font-size: 6rem;
      line-height: 6rem;
      max-width: 30rem;
    }

    .flex-container img {
      display: inline;
      margin: 0 0 6rem 1rem
    }

    .flex-wrapper {
      display: flex;
      flex-direction: row;
    }

    .flex-container-intro {
      display: flex;
      flex-direction: row;
      padding-left: 5rem;
      gap: 3rem;
    }

    .image-overlay div {
      width: 15rem;
      height: 15rem;
    }
  }

  @media (min-width: 70rem) {

    h1 {
      padding: 4rem 3rem 4rem 3rem;
      font-size: 8rem;
      line-height: 8rem;
      max-width: 50rem;
      gap: 0 2rem;
    }

    .flex-container img {
      width: 2rem;
      margin: 0 0 8rem 3rem
    }

    .flex-container-intro {
      padding-left: 8rem;
      gap: 10rem;
    }

    .image-overlay div {
      width: 25rem;
      height: 25rem;
    }

    .image-overlay img {
      height: 100%;
    }
  }

  @media (min-width: 90rem) {
    
    h1 {
      padding: 6rem 3rem 4rem 9rem;
      font-size: 9rem;
      line-height: 9rem;
    }

    .flex-container-intro {
      padding-left: 14rem;
      gap: 15rem;
    }

    .image-overlay div {
      margin-top: -8rem;
      width: 35rem;
      height: 30rem;
    }
  }

</style>