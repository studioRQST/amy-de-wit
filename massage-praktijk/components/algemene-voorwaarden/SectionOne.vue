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
            <p>Beste cliënt,
               Als eigenaar van Massagepraktijk Amy de Wit heet ik je van harte welkom. Voordat we aan onze behandelingen beginnen, wil ik graag enkele belangrijke zaken met je delen. Deze algemene voorwaarden zijn bedoeld om ervoor te zorgen dat onze samenwerking soepel en plezierig verloopt.
            </p>
            <h3>Afspraken en Annuleringen</h3>
            <p>Ik waardeer het als je je afspraken met mij nakomt. Als je een afspraak moet annuleren, vraag ik je vriendelijk om dit minstens 24 uur van tevoren te doen. Op die manier kan ik de vrijgekomen tijd weer aan een andere cliënt aanbieden. Bij niet tijdige annulering behoud ik me het recht voor om de gereserveerde tijd in rekening te brengen.</p>
            <h3>Betalingen</h3>
            <p>Om onze administratie vlot te laten verlopen, verzoek ik je om betalingen binnen 7 dagen na de behandeling te voldoen. Houd er alsjeblieft rekening mee dat mijn behandelingen niet worden vergoed door zorgverzekeraars.</p>
            <h3>Aansprakelijkheid</h3>
            <p>Het welzijn van mijn cliënten staat voorop. Ik wil echter benadrukken dat ik niet aansprakelijk kan worden gesteld voor verlies of schade aan persoonlijke eigendommen tijdens je verblijf in mijn praktijk. In geval van onvoorziene omstandigheden, volg alsjeblieft de instructies van mijzelf of andere bevoegde instanties op.</p>
            <h3>Privacy</h3>
            <p>Jouw privacy is ontzettend belangrijk voor mij. Ik ga zorgvuldig om met je persoonsgegevens en houd me strikt aan alle geldende wet- en regelgeving op het gebied van gegevensbescherming. Je persoonlijke informatie wordt alleen gebruikt voor de doeleinden waarvoor je ze hebt verstrekt.</p>
            <h3>Wijzigingen in de Algemene Voorwaarden</h3>
            <p>Massagepraktijk Amy de Wit behoudt zich het recht voor om deze algemene voorwaarden op elk moment te wijzigen of bij te werken. Eventuele wijzigingen worden op deze pagina gepubliceerd en zijn direct van kracht.</p>
            <p>Bedankt voor het lezen van deze algemene voorwaarden. Door een afspraak te maken bij Massagepraktijk Amy de Wit, ga je akkoord met de genoemde voorwaarden.</p>
            <p>Met vriendelijke groet,</p>
            <p>Massagepraktijk Amy de Wit</p>
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