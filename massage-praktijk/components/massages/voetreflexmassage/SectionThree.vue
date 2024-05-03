<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper">
      <h2>Voordelen van voetreflex massage</h2>
      <ul>
        <li>Stressverlichting en ontspanning</li>
        <li>Verbeterde bloedcirculatie en lymfedrainage
        </li>
        <li>Verlichting van pijn en ongemak</li>
        <li>Versterking van het immuunsysteem</li>
        <li>
          Balansherstel van lichaam en geest
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--primary);
  padding: 5rem 1.5rem;
}

h2 {
  color: white;
}

ul {
  color: white;
  margin: 2rem 1.5rem 0 1.5rem;
}

li {
  margin-top: 1rem;
}


@media only screen and (min-width: 48rem) {


  .flex-wrapper {
    flex-direction: column;
    display: flex;
    margin-left: 5rem;
  }
}

@media only screen and (min-width: 70rem) {
  span {
    display: inline;
  }

  .flex-wrapper {
    margin-left: 10rem;
  }

  ul {
    margin-left: 2rem;
  }
}

</style>