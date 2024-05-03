<script setup lang="ts">

</script>

<template>
  <section>
  <div class="intro-contain">
    <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
    <h2><span>Amy's</span> massages</h2>
  </div>

  <div class="intro-contain-text">
    <h4>Ervaar hoe <span>lymfedrainage</span> en <span>sportmassage</span> je herstel naar een hoger niveau tillen.</h4>
  </div>
  </section>
</template>

<style scoped>

.intro-contain{
  display: flex;
  gap: 1rem;
  padding: 5rem 1.5rem 2rem 1.5rem;
}

.intro-contain span{
  font-family: bebas-neue-pro, sans-serif;
  color: var(--secondary);
  display: block;
}

.intro-contain img{
  margin-bottom: 4rem;
}

.intro-contain-text{
  padding: 0rem 1.5rem 3.5rem 3.5rem;
}

.intro-contain-text span {
  font-weight: bold;
}

@media only screen and (min-width: 40rem) {

  section {
    margin-left: 1rem;
  }

  h2, h4 {
    margin-left: 1rem;
  }

  h4 {
    max-width: 30rem;
  }
}

@media (min-width: 70rem) {
  section {
    margin-top: 8rem;
  }

  h2 {
    margin-left: 2rem;
  }

  h4 {
    margin-left: 4.8rem;
  }

  .intro-contain img {
    width: 1.5rem;
    margin-top: 1.2rem;
  }

  .intro-contain span {
    display: inline;
  }

  .intro-contain {
    margin-left: 2rem;
  }
}

</style>