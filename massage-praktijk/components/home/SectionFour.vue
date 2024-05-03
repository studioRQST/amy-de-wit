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
    scale: 1.1,
    ease: 'power1.inOut',
  });
});
</script>

<template>
    <section>
        <div class="intro-contain">
            <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
            <h2><span>Ontmoet</span> Amy</h2>
        </div>
        <div class="image-overlay">
            <div ref="overlayDiv">
                <img ref="imageElement" src="/static/images/dit-ben-ik.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
        <div class="image-description">
            <h3>Het Gezicht achter Massagepraktijk Amy de Wit</h3>
            <h4>Ontdek de Passie en Expertise Achter Amy de Wit</h4>
            <nuxt-link href="/over-mij" aria-label="Link naar pagina over mij">
                <button class="primary-button">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Ontmoet Amy</span>
                </button>
            </nuxt-link>
        </div>
    </section>
</template>

<style scoped>

section{
    padding: 2rem 0;
    background-color: var(--background-color);
}

.intro-contain{
    display: flex;
    gap: 1rem;
    padding: 5rem 1.5rem 2rem 1.5rem;
}

.intro-contain span{
    font-family: bebas-neue-pro, sans-serif;
    color: var(--secondary);
}

.image-overlay{
    display: flex;
    justify-content: center;
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

.image-description{
    margin: 2.5rem 0;
    padding: 0 1.5rem;
}

.image-description h4{
    margin: 1rem 0;
}

.image-description button{
    margin: 1rem 0;
}

@media (min-width: 40rem){

    .intro-contain{
        padding: 5rem 3rem 3rem 3rem;
    }

    .image-overlay div{
        height: 20rem;
    }

    .image-overlay img{
        width: 120%;
    }

    .image-description{
        margin: 4rem 3rem 4rem 10rem;
    }

}

@media (min-width: 70rem){

    section{
        padding: 5rem 0;
        background-color: var(--background-color);
    }

    .intro-contain{
        padding: 5rem 4rem 5rem 4rem;
    }

    .intro-contain img{
        margin: 0 3rem 0 0;
        width: 1.5rem;
    }

    .image-overlay div{
        height: 25rem;
    }

    .image-overlay img{
        width: 100%;
    }

    .image-description{
        margin: 5rem 4rem 10rem 30rem ;
    }

}

@media (min-width: 90rem){


    .image-overlay div{
        height: 35rem;
    }

    .image-description{
        margin: 5rem 4rem 10rem 45rem ;
    }

}


</style>