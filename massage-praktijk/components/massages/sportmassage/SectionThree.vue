<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper">
    <h2>Voordelen van sportmassage</h2>
    <ul>
      <li>Verbeterde doorbloeding en zuurstoftoevoer naar de spieren</li>
      <li>Vermindering van spierspanning en stress</li>
      <li>Sneller herstel na inspanning</li>
      <li>Preventie van blessures en overbelasting</li>
      <li>Verbeterde flexibiliteit en mobiliteit</li>
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