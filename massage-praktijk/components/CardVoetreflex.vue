<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const cardElement = ref<HTMLElement | null>(null);

    onMounted(() => {
        gsap.from(cardElement.value, {
            x: '-100%',
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cardElement.value,
                start: 'top 100%',
                end: 'bottom 50%',
                scrub: true,
            },
        });
    });
</script>

<template>
<section>
    <div ref="cardElement">
        <div class="image-overlay">
            <div>
                <img src="/static/images/voetreflex-2.avif" alt="Afbeelding Lymfedrainage" loading="lazy">
            </div>
        </div>
        <div class="image-description">
            <h3>Voetreflexmassage</h3>
            <h4>Verken de genezende kracht van Voetreflexpunten</h4>
            <nuxt-link href="/massages/voetreflex" aria-label="Link naar pagina voetreflexmassage">
                <button class="primary-button">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Lees meer</span>
                </button>
            </nuxt-link>
        </div> 
    </div>   
</section>
</template>

<style scoped>
    section {
        padding: 1.5rem;
    }

    .image-overlay div {
        overflow: hidden;
        width: 22rem;
        height: 18rem;
        background-color: var(--secondary);
    }

    .image-overlay img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

    .image-description {
        margin: 2.5rem 0;
    }

    .image-description h4 {
        margin: 1rem 0;
    }

    .image-description button {
        margin: 1rem 0;
    }

    @media (min-width: 40rem) {
        .image-description {
            max-width: 22rem;
        }
    }

    @media (min-width: 70rem) {

        section{
            margin-top: -10rem;
        }

        .image-overlay div {
            width: 25rem;
            height: 22rem;
        }

        .image-description {
            max-width: 25rem;
        }
    }

    @media (min-width: 90rem) {
        .image-overlay div {
            width: 30rem;
            height: 25rem;
        }
    }
</style>
