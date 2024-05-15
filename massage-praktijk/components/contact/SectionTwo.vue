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
        <div class="image-overlay">
            <div ref="imageElement">
                <img src="/static/images/welkom-praktijk.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
    </section>
    <div>
        <ContactSectionThree/>
    </div>
</template>

<style scoped>

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
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

@media (min-width: 40rem){

    .image-overlay div{
        height: 25rem;
    }
}

@media (min-width: 70rem){

    .image-overlay div{
        height: 30rem;
    }
}

@media (min-width: 90rem){

    .image-overlay div{
        height: 45rem;
    }
}


</style>