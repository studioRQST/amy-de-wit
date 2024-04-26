<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <h2>Van <span>liefde</span> voor massage naar een <span>eigen praktijk</span></h2>
        </div>
        <div class="description">
            <p>Mijn passie voor massage begon in 2006, toen ik mijn opleiding Sportmassage volgde en deze succesvol afrondde met een diploma in mei 2007. Direct daarna ben ik lid geworden van het Nederlands Genootschap voor Sportmassage (NGS), waarmee ik mijn toewijding aan kwaliteit en professionaliteit in het vakgebied aantoonde.</p>
            <p>Naast mijn eerdere werk als pedagogisch medewerker in een kindercentrum, heb ik altijd een passie voor massage behouden. Gedurende de jaren heb ik mezelf voortdurend verder ontwikkeld en mijn kennis uitgebreid door het volgen van verschillende cursussen, waaronder een opleiding in hotstone massage.</p>
        </div>
        <div class="wrapper">
            <div class="image-overlay">
                <div>
                    <img src="/static/images/dit-ben-ik-aan-het-werk.avif" alt="Afbeelding Lymfedrainage">
                </div>
            </div>
            <div class="description-two">
                <h3>Passie voor Groei en Vernieuwing</h3>
                <p>In 2020 besloot ik een nieuwe stap te zetten in mijn carrière door te starten met een opleiding in lymfedrainage en lymfetaping. Deze nieuwe vaardigheden hebben mijn enthousiasme voor het vak verder aangewakkerd en hebben me aangemoedigd om mijn eigen massagepraktijk te beginnen. Nu, volledig toegewijd aan mijn passie, sta ik klaar om mijn klanten te helpen bij het bereiken van een optimale gezondheid en welzijn.</p>
                <p>Bij mij kunt u rekenen op professionele en persoonlijke zorg, waarbij ik elke behandeling afstem op uw specifieke behoeften en wensen. Ik kijk ernaar uit om u te verwelkomen in mijn praktijk en u te helpen herstellen en revitaliseren.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

    .intro-contain{
        padding: 6rem 1.5rem 2rem 1.5rem;
    }

    .intro-contain span{
        font-family: bebas-neue-pro, sans-serif;
        color: var(--secondary);
    }

    .description{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0 1.5rem 5rem 1.5rem;
    }

    .image-overlay div{
        overflow: clip;
        width: 100%;
        height: 30rem;
        background-color: var(--secondary);
    }

    .image-overlay img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

    .description-two{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 5rem 1.5rem 5rem 1.5rem;
    }

@media (min-width: 40rem){

    .intro-contain{
        padding: 8rem 3rem 2rem 3rem;
    }

    .description{
        padding: 0 3rem 5rem 3rem;
    }

    .wrapper{
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
    }

    .image-overlay div{
        overflow: clip;
        width: 20rem;
        height: 30rem;
    }

    .description-two{
        padding: 0rem 3rem 8rem 3rem;
    }

}

@media (min-width: 70rem){

    .intro-contain{
        padding: 10rem 4rem 6rem 4rem;
        max-width: 40rem;
    }

    .description{
        padding: 0 10rem 8rem 10rem;
    }

    .wrapper{
        gap: 1rem;
    }

    .image-overlay div{
        width: 30rem;
    }

    .description-two{
        padding: 0rem 3rem 15rem 10rem;
    }

}

@media (min-width: 90rem){

    .intro-contain{
        padding: 11rem 4rem 8rem 4rem;
        max-width: 40rem;
    }

    .description{
        padding: 0 13rem 10rem 13rem;
    }

    .wrapper{
        gap: 6rem;
    }

    .image-overlay div{
        overflow: clip;
        width: 40rem;
        height: 40rem;
        background-color: var(--secondary);
    }

    .image-overlay img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

    .description-two{
        padding: 0rem 3rem 30rem 13rem;
    }

}

</style>