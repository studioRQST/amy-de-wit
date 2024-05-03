<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let imageElement = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(imageElement.value, {
    scrollTrigger: {
      trigger: imageElement.value,
      start: 'top 100%',
      end: 'bottom bottom',
      scrub: 1.5,
    },
    width: '100vw',
    ease: 'power1.inOut',
  });
});
</script>

<template>
    <section>
        <div class="intro-contain">
            <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
            <h1><span>Even</span> voorstellen</h1>
        </div>
        <div class="image-description">
            <h3>Ontdek de Passie en Expertise Achter Amy de Wit</h3>
            <p>Welkom! Mijn naam is Amy en ik ben de trotse eigenaar van Massagepraktijk Amy de Wit. Met meer dan 15 jaar ervaring als gecertificeerd sportmasseur en lid van het Nederlands Genootschap voor Sportmassage (NGS), ben ik gepassioneerd over het leveren van hoogwaardige massagebehandelingen die gericht zijn op herstel en welzijn.</p>
            <p>Mijn missie is om elke klant een op maat gemaakte ervaring te bieden, waarbij ik de kracht van massage combineer met een diepgaande kennis van het menselijk lichaam om een gevoel van vernieuwing en vitaliteit te bevorderen.</p>
        </div>
        <div class="image-overlay">
            <div ref="imageElement">
                <img src="/static/images/dit-ben-ik.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
    </section>
</template>

<style scoped>

    .intro-contain{
        padding: 8rem 1.5rem 2rem 1.5rem;
    }

    .intro-contain img{
        display: none;
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

    .image-overlay{
        display: flex;
        justify-content: center;
    }

    .image-overlay div{
        overflow: hidden;
        width: 80%;
        height: 18rem;
        background-color: var(--secondary);
    }

    .image-overlay img{
        object-fit: cover;
        width: 130%;
        height: 150%;
        opacity: 0.8;
    }

@media (min-width: 40rem){

    .intro-contain{
        display: flex;
        padding: 10rem 3rem 2rem 3rem;
    }

    .intro-contain img{
        display: block;
        margin-right: 1rem;
    }

    .image-overlay div{
        height: 20rem;
    }

    .image-description{
        gap: 2rem;
        padding: 0 3rem 5rem 5rem;
    }
}

@media (min-width: 70rem){

    .intro-contain{
        display: flex;
        padding: 12rem 4rem 5rem 4rem;
    }

    .intro-contain img{
        width: 2rem;
        margin-right: 4rem;
    }

    .image-description{
        gap: 2rem;
        padding: 0 3rem 10rem 10rem;
        max-width: 50rem;
    }

    .image-overlay div{
        height: 25rem;
    }

    .image-overlay img{
        width: 100%;
    }
}

@media (min-width: 90rem){

    .intro-contain{
        padding: 14rem 4rem 5rem 4rem;
    }

    .intro-contain img{
        margin-right: 10rem;
    }

    .image-description{
        padding: 0 3rem 12rem 16.5rem;
        max-width: 60rem;
    }

    .image-overlay div{
        height: 35rem;
    }
}


</style>