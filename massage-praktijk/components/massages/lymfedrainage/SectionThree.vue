<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper">
    <h2>Voordelen van <span>lymfedrainage</span></h2>
    <ul>
      <li>Vermindert zwellingen en vochtophopingen</li>
      <li>Ondersteunt het immuunsysteem</li>
      <li>Bevordert ontgifting en afvalstoffen afvoer</li>
      <li>Verlicht symptomen van oedeem, lymfoedeem en zware benen</li>
      <li>Helpt bij het herstel na chirurgische ingrepen of letsel</li>
      <li>Verbetert de algehele gezondheid en vitaliteit</li>
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

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

ul {
  color: white;
  margin-top: 2rem;
  margin-left: 1.5rem;
}

li {
  margin-top: 1rem;
}

@media only screen and (min-width: 48rem) {
  section {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin: 0;
  }
}
</style>