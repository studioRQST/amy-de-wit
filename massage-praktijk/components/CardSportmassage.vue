<script setup lang="ts">
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        const cardElement = document.querySelector('.card-animation-2');

        gsap.from(cardElement, {
            y: '-10%',
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cardElement,
                start: 'top center',
                end: 'center center',
                scrub: 1.5,
            },
        });
    });
</script>

<template>
<section>
    <div class="card-animation-2">
    <div class="image-overlay">
        <div>
            <img src="/static/images/sportmassage.avif" alt="Afbeelding Lymfedrainage">
        </div>
    </div>
    <div class="image-description">
        <h3>Sportmassage</h3>
        <h4>Optimaliseer Jouw Prestaties met Sportmassage</h4>
        <nuxt-link href="/massage/sportmassage" aria-label="Link naar pagina sportmassage">
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

section{
    padding: 1.5rem;
}

.image-overlay div{
    overflow: clip;
    width: 22rem;
    height: 18rem;
    background-color: var(--secondary);
}

.image-overlay img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

.image-description{
    margin: 2.5rem 0;
}

.image-description h4{
    margin: 1rem 0;
}

.image-description button{
    margin: 1rem 0;
}

@media (min-width: 40rem){

    section{
        padding: 8rem 0 0 15rem;
    }
}

@media (min-width: 70rem){

    section{
        padding: 0rem 0 0 35rem;
    }

    .image-overlay div{
        width: 25rem;
        height: 22rem;
    }

    .image-description{
        max-width: 25rem;
    }

}

@media (min-width: 90rem){

    section{
        padding: 0 0 0 55rem;
    }

}



</style>