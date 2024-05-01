<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <h2>Lid van NGS</h2>
      <h3>NGS-Lidmaatschap bij Massagepraktijk Amy de Wit</h3>
      <p>Bij Massagepraktijk Amy de Wit ben ik trots op mijn lidmaatschap bij het Nederlands Genootschap voor
        Sportmassage (NGS). Dit lidmaatschap erkent mijn toewijding aan kwaliteit en professionaliteit.</p>
      <FooterLogoNgs/>
    </div>
  </section>
</template>

<style scoped>

section {
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.5rem;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
}

h2, h3, p {
  color: var(--background-color);
}

p{
  margin-bottom: 1rem;
}

@media (min-width: 40rem){

  section {
    padding: 7rem 3rem;
  }

  p {
    max-width: 40rem;
  }
}

@media (min-width: 70rem){

  section {
    padding: 10rem 4rem;
  }

  p {
    max-width: 50rem;
  }
}


</style>