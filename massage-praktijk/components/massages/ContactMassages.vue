<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper-text">
      <h2>Maak een <span>afspraak</span> bij Amy!</h2>
      <p>Neem vandaag nog contact op om een afspraak te maken bij Massagepraktijk Amy de Wit. Ik kijk ernaar uit om je te
        verwelkomen en je te helpen op jouw pad naar herstel en welzijn.</p>
    </div>
    <div>
      <ContactForm/>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1.5rem;
}

h2{
  padding-bottom: 1rem;
}

span {
  color: var(--secondary);
  font-family: bebas-neue-pro, sans-serif;
}

.flex-wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding-bottom: 3rem;
}

@media only screen and (min-width: 40rem) {

  section{
    margin: 0 5rem 5rem 5rem;
  }

  p{
    margin: 0 8rem;
  }

}

@media only screen and (min-width: 70rem) {

  section{
    margin: 0 8rem 8rem 8rem;
  }

  p{
    margin: 0 10rem;
  }
}

@media only screen and (min-width: 90rem) {

  section{
    margin: 15rem 8rem 10rem 8rem;
  }

  p{
    margin: 1rem 15rem;
  }

  section div:nth-child(2){
    margin: 0 10rem;
  }
}

</style>