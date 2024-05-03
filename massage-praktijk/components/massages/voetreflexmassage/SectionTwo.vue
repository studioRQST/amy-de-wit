<script setup lang="ts">

</script>

<template>
  <section>
    <h2>Wat is een</h2>
    <h2><span>voetreflex massage?</span></h2>
    <p>Voetreflexmassage is een therapeutische massagebehandeling die gebaseerd is op de principes van reflexologie.
      Volgens deze principes zijn bepaalde reflexpunten in de voeten verbonden met specifieke organen en lichaamsdelen.
      Door deze punten te stimuleren, kan de energiestroom in het lichaam worden hersteld en kunnen blokkades worden
      opgeheven, wat leidt tot fysieke en mentale ontspanning en welzijn.</p>
  </section>
</template>

<style scoped>
section {
  margin: 5rem 1.5rem;
}

p {
  margin: 2rem 0 2rem 0;
}

span {
  color: var(--secondary);
  display: block;
  font-family: bebas-neue-pro, sans-serif;
}

@media only screen and (min-width: 48rem) {
  section {
    margin-top: 5rem;
    margin-left: 1.5rem;
  }

  span {
    display: inline;
  }
}

@media only screen and (min-width: 70rem) {
  section {
    margin-top: 15rem;
    margin-left: 4rem;
  }

  p {
    width: 80%;
  }
}


</style>