<template>
    <section>
        <div class="intro-contain">
            <h1>Verlicht<img src="/static/icons/icon-logo-horizontaal.svg" alt="Icoon Logo"></h1>
            <h1>Herstel <span>&</span></h1>
            <h1>Vernieuw</h1>
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
    color: var(--secondary);
    font-family: bebas-neue-pro, sans-serif;
}

.intro-contain img{
    margin: 0 0 1rem 1rem;
}

.intro-contain-text{
    padding: 0rem 1.5rem 3.5rem 1.5rem;
    display: flex;
    gap: 2rem;
}

.intro-contain-text img {
    animation: rotateStar 6s linear infinite; 
}

@keyframes rotateStar {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
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