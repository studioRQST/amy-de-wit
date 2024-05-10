<script setup lang="ts">

</script>

<template>
  <section>
    <div class="container-header">
      <h1>Bedankt</h1>
      <h2>Je bericht is succesvol verzonden!</h2>
    </div>
    <div class="container-par">
      <h3>Bedankt voor het nemen van de tijd om contact met mij op te nemen</h3>
      <p>Ik waardeer je interesse en zal zo snel mogelijk reageren. In de tussentijd, voel je vrij om verder te bladeren
        op mijn website of keer terug naar de homepage.
      </p>
    </div>
    <nuxt-link href="/" aria-label="Link naar home page">
      <button class="primary-button">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
        <span class="button-text">Terug naar start</span>
      </button>
    </nuxt-link>

  </section>
</template>

<style scoped>
section {
  margin-top: 5rem;
  margin-left: 2rem;

}

h2 {
  color: var(--secondary);
}


.container-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.container-par {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem
}

button {
  margin-top: 2rem;
}

@media (min-width: 40rem) {
  section {
    margin-top: 8rem;
  }

  .container-par {
    margin-top: 3rem;
  }
}

@media (min-width: 70rem) {
  section {
    margin-left: 8rem;

  }

  .container-par {
    width: 80%;
  }
}


</style>