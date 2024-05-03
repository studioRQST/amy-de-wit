<script setup lang="ts">

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  mainEntity: [
    {
      '@type': 'AboutPage',
      name: 'Over Mij',
      url: 'https://www.amy-de-wit.nl/over-mij',
      description: 'Ontdek het verhaal achter RQST en maak kennis met mij team van creatieve geesten.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.amy-de-wit.nl/over-mij',
      },
    },
    {
      '@type': 'CollectionPage',
      name: 'Massages',
      url: 'https://www.amy-de-wit.nl/massages',
      description: 'Ontdek onze creaties.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.amy-de-wit.nl/massages',
      },
    },
    {
      '@type': 'ContactPage',
      name: 'Contact',
      url: 'https://www.amy-de-wit.nl/contact',
      description: 'Heb je een RQST? Wij staan voor je klaar.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.amy-de-wit.nl/contact',
      },
    },
  ],
});
</script>

<template>
<div>
  <head>
      <title>Verlicht Herstel & Vernieuw - Massagepraktijk Amy de Wit</title>
      <meta name="description" content="Ontdek de kracht van lymfedrainage en sportmassage voor optimaal herstel bij Massagepraktijk Amy de Wit. Laat mij je begeleiden op een reis van herstel en vernieuwing in Hem.">
  </head>
  <NavbarHeader/>
  <HomePage/>
  <FooterNgs/>
  <Footer/>
</div>
</template>

<style scoped>

</style>