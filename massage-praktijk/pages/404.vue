<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})


const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <section>
    <div class="container-header">
        <h1>404 error</h1>
        <h2>Pagina niet gevonden</h2>
    </div>
    <div class="container-par">
        <h3>Het lijkt erop dat je een verkeerde afslag hebt genomen!</h3>
        <p>De pagina die je probeert te bereiken, bestaat niet (meer) of is verplaatst. Maar geen zorgen, ik sta voor je
          klaar om je weer op het juiste spoor te zetten.</p>
    </div>
        <nuxt-link href="/" aria-label="Link naar home page">
          <button @click="handleError" class="primary-button">
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



</style>