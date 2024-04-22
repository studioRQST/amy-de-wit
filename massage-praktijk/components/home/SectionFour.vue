<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
            <h2><span>Ontmoet</span> Amy</h2>
        </div>
        <div class="image-overlay">
            <div>
                <img src="/static/images/dit-ben-ik.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
        <div class="image-description">
            <h3>Het Gezicht achter Massagepraktijk Amy de Wit</h3>
            <h4>Ontdek de Passie en Expertise Achter Amy de Wit</h4>
            <nuxt-link href="/" aria-label="Link naar pagina over mij">
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

.intro-contain{
    display: flex;
    gap: 1rem;
    padding: 5rem 1.5rem 2rem 1.5rem;
}

.intro-contain span{
    font-family: bebas-neue-pro, sans-serif;
    color: var(--secondary);
}

.intro-contain-text{
    padding: 0rem 1.5rem 3.5rem 3.5rem;
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


</style>