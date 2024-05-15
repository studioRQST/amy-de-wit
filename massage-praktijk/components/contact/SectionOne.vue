<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <div class="flex-wrapper-text">
          <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
          <h1>Heb je vragen?</h1>
      </div>
      <div>
        <h2>Ik sta voor je klaar!</h2>
        <p>Heb je vragen, wil je meer informatie over mijn massages of wil je een afspraak maken? Aarzel niet om contact met
          mij op te nemen. Ik kijk ernaar uit om u te verwelkomen in mijn praktijk!</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 8rem 1.5rem 5rem 1.5rem ;
}

p {
  margin-bottom: 2rem;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--secondary);
}

.flex-container img {
  display: none;
}

@media only screen and (min-width: 40rem) {

  section {
    margin: 8rem 3rem 8rem 3rem;
  }

  .flex-container{
    margin-bottom: 3rem;
  }

  .flex-container p{
    max-width: 40rem;
    margin: 2rem 0 4rem 0;
  }

  .flex-container img {
    display: inline;
    margin-right: 2rem;
  }

  .flex-wrapper-text{
    display: flex;
    flex-direction: row;
  }

  .flex-container div:nth-child(2){
    margin: 0 3rem
  }
}

@media only screen and (min-width: 70rem) {

  section {
    margin: 12rem 4rem 12rem 4rem ;
  }

  h2 {
    font-size: 5rem;
  }

  .flex-container img {
    width: 2rem;
    margin-right: 4rem;
  }

  .flex-container div:nth-child(2){
    margin: 0 6rem
  }
}

@media only screen and (min-width: 90rem) {

  section {
    margin: 14rem 4rem 14rem 4rem ;
  }

  .flex-container img {
    width: 2rem;
    margin-right: 10rem;
  }

  .flex-container div:nth-child(2){
    margin: 0 12rem
  }
}


</style>