<template>
  <div>
    <NavbarHeader />
    <HomePage />
    <FooterNgs />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Verlicht Herstel & Vernieuw - Massagepraktijk Amy de Wit',
  meta: [
    {
      name: 'description',
      content: 'Ontdek de kracht van lymfedrainage en sportmassage voor optimaal herstel bij Massagepraktijk Amy de Wit. Laat mij je begeleiden op een reis van herstel en vernieuwing in Hem.'
    },
    {
      name: 'keywords',
      content: 'lymfedrainage, sportmassage, voetreflex, Amy de Wit, massage, massagepraktijk'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amydewit.nl'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Massagepraktijk Amy de Wit",
        "image": "https://www.amydewit.nl/_nuxt/sportmassage-3.D4JtxzRM.avif",
        "@id": "https://www.amydewit.nl",
        "url": "https://www.amydewit.nl",
        "telephone": "+31610629690",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Elbaweg 30",
          "addressLocality": "Hem",
          "postalCode": "1607 MP",
          "addressCountry": "NL"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "09:00",
            "closes": "14:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "19:30",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "10:45",
            "closes": "14:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "19:30",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/p/Massagepraktijk-Amy-de-Wit-100068390764954/"
        ]
      }
      `
    }
  ]
})
</script>
