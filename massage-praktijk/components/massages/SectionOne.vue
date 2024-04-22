<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
    <h1><span class="span-brown">Ontdek</span> mijn massages</h1>
    <h3>Welkom bij Massagepraktijk Amy de Wit</h3>
    <p>In mijn praktijk focus ik mij op twee effectieve massagebehandelingen die specifiek zijn ontworpen om herstel en
      welzijn te bevorderen.</p>
    </div>

    <div class="image-overlay">
      <div>
        <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 8rem;
}

h3 , p {
  margin-top: 2rem;
}

.flex-container {
  margin-left: 1.5rem;
}

span {
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

.span-brown {
  color:  var(--secondary);
}

.image-overlay div{
  overflow: clip;
  width: 100%;
  height: 18rem;
  background-color: var(--secondary);
  margin-top: 2rem;
}

.image-overlay img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}


</style>