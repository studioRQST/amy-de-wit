<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <h1><span>Even</span> voorstellen</h1>
        </div>
        <div class="image-description">
            <h3>Ontdek de Passie en Expertise Achter Amy de Wit</h3>
            <p>Welkom! Mijn naam is Amy en ik ben de trotse eigenaar van Massagepraktijk Amy de Wit. Met meer dan 15 jaar ervaring als gecertificeerd sportmasseur en lid van het Nederlands Genootschap voor Sportmassage (NGS), ben ik gepassioneerd over het leveren van hoogwaardige massagebehandelingen die gericht zijn op herstel en welzijn.</p>
            <p>Mijn missie is om elke klant een op maat gemaakte ervaring te bieden, waarbij ik de kracht van massage combineer met een diepgaande kennis van het menselijk lichaam om een gevoel van vernieuwing en vitaliteit te bevorderen.</p>
        </div>
        <div class="image-overlay">
            <div>
                <img src="/static/images/dit-ben-ik.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
    </section>
</template>

<style scoped>

    .intro-contain{
        padding: 8rem 1.5rem 2rem 1.5rem;
    }

    .intro-contain span{
        font-family: bebas-neue-pro, sans-serif;
        color: var(--secondary);
    }

    .image-description{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0 1.5rem 3rem 1.5rem;
    }

    .image-overlay div{
        overflow: clip;
        width: 100%;
        height: 18rem;
        background-color: var(--secondary);
    }

    .image-overlay img{
        object-fit: cover;
        width: 130%;
        height: 150%;
        opacity: 0.8;
    }

</style>