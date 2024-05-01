<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
            <h1>Algemene voorwaarden</h1>
        </div>
        <h2>Belangrijke informatie voor een soepele behandeling</h2>
        <div class="text-description">
            <h3>Algemene Voorwaarden</h3>
            <p>Welkom bij Massagepraktijk Amy de Wit. Voordat je gebruik maakt van onze diensten, vragen we je vriendelijk om deze algemene voorwaarden zorgvuldig door te lezen. Deze voorwaarden zijn van toepassing op alle behandelingen en afspraken die plaatsvinden bij Massagepraktijk Amy de Wit.</p>
            <h3>Afspraken en Annuleringen</h3>
            <h3>Betalingen</h3>
            <h3>Aansprakelijkheid</h3>
            <h3>Privacy</h3>
            <h3>Wijzigingen in de Algemene Voorwaarden</h3>
            <p>Massagepraktijk Amy de Wit behoudt zich het recht voor om deze algemene voorwaarden op elk moment te wijzigen of bij te werken. Eventuele wijzigingen worden op deze pagina gepubliceerd en zijn direct van kracht.</p>
            <p>Door het maken van een afspraak bij Massagepraktijk Amy de Wit ga je akkoord met deze algemene voorwaarden.</p>
        </div>
    </section>
</template>

<style scoped>

    section{
        padding: 8rem 0 5rem 0;
    }

    .intro-contain{
        padding: 0 1.5rem;
    }

    .intro-contain img{
        display: none;
    }

    h2 {
        font-family: bebas-neue-pro, sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 3rem;
        line-height: 3rem;
        color: var(--secondary);
        padding: 1.5rem 1.5rem 0 1.5rem;
    }

    .text-description{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem 1.5rem 3rem 1.5rem;
    }

@media (min-width: 40rem){

        section{
            padding: 8rem 0 5rem 0;
        }

        .intro-contain{
            padding: 0 3rem;
        }

        h2 {
            padding: 0 3rem 0 3rem;
        }

        .text-description{
            padding: 4rem 3rem 3rem 3rem;
            max-width: 50rem;
        }

    }

@media (min-width: 70rem){

    .intro-contain img{
        display: block;
        width: 2rem;
        margin-right: 4rem;
    }

    section{
        padding: 12rem 0 10rem 0;
    }

    .intro-contain{
        padding: 0 4rem;
        display: flex;
    }

    h2 {
        padding: 1.5rem 4rem 0 10rem;
        font-size: 4rem;
        line-height: 4rem;
    }

    .text-description{
        padding: 6rem 4rem 3rem 10rem;
        max-width: 60rem;
    }
}

@media (min-width: 90rem){

    .intro-contain img{
        margin-right: 10rem;
    }

    section{
        padding: 14rem 0 10rem 0;
    }

    .intro-contain{
        padding: 0 4rem;
        display: flex;
    }

    h2 {
        padding: 1rem 4rem 0 16rem;
    }

    .text-description{
        padding: 8rem 4rem 3rem 16rem;
        max-width: 80rem;
        gap: 2rem;
    }
}
</style>