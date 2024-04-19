<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <h1>Verlicht <img src="/static/icons/icon-logo-horizontaal.svg" alt="Icoon Logo">Herstel <span>&</span> Vernieuw</h1>
        </div>
        <div class="intro-contain-text">
            <img src="/static/icons/icon-star-brown.svg" alt="Icoon Ster">
            <h4>Ontdek de kracht van <span>lymfedrainage</span> en <span>sportmassage</span> voor een optimaal herstel</h4>
        </div>
        <div class="image-overlay">
            <div>
                <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
            </div>
        </div>
    </section>
</template>

<style scoped>

.intro-contain{
    padding: 8rem 1.5rem 3rem 1.5rem;
}

.intro-contain span{
    font-family: bebas-neue-pro, sans-serif;
    color: var(--secondary);
}

.intro-contain img{
    margin-bottom: 1rem;
}

.intro-contain-text{
    padding: 0rem 1.5rem 3.5rem 1.5rem;
    display: flex;
    gap: 2rem;
}

.intro-contain-text span{
    font-weight: 600;
}

.image-overlay div{
    overflow: clip;
    width: 100%;
    height: 18rem;
    background-color: var(--secondary);
}

.image-overlay img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}


</style>