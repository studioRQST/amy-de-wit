<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
    <div class="flex-wrapper-text">
      <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
    <h1>Heb je vragen?</h1>
    </div>
    <h2>Ik sta voor je klaar!</h2>
    <p>Heb je vragen, wil je meer informatie over mijn massages of wil je een afspraak maken? Aarzel niet om contact met
      mij op te nemen. Ik kijk ernaar uit om u te verwelkomen in mijn praktijk!</p>
    </div>

    <ContactForm/>
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

@media only screen and (min-width: 48rem) {
  h1 {
    margin-left: 3rem;
  }

  h2, p {
    margin-left: 4.8rem;
  }

  .flex-container img {
    display: inline;
    width: 1.5rem;
  }

  .flex-wrapper-text {
    display: flex;
    flex-direction: row;
  }
}
</style>