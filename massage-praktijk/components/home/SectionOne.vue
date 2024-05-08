<script>
import { gsap } from 'gsap';

export default {
    mounted() {
    // GSAP animation
    gsap.from(".home-wrapper", {
        x: -100, 
        opacity: 0,
        duration: 1, 
        ease: "power2.out" 
    });

    gsap.from(".home-image-overlay", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.5,
        delay: 2.5 
    });

    gsap.from([".home-intro-contain h1", ".home-intro-contain-text h4"], {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.5,
        delay: 0.5
    });

    gsap.from([".home-intro-contain img", ".home-intro-contain-text img"], {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out",
        stagger: 0.5,
        delay: 1
    });

    gsap.from(".wrapper h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 1.5
    });
}
}
</script>

<template>
    <section>
        <div class="container">
            <div class="home-wrapper">
                <div class="home-intro-contain">
                    <h1>Verlicht<nuxt-img src="/icons/icon-logo-horizontaal.svg" alt="Icoon Logo" loading="lazy" width="50" height="50"></nuxt-img>Herstel<span>&</span></h1>
                </div>
                <div class="wrapper">
                    <h1>Vernieuw</h1>
                    <div class="home-intro-contain-text">
                        <nuxt-img src="/icons/icon-star-brown.svg" alt="Icoon Ster" loading="lazy" width="40" height="40"></nuxt-img>
                        <h4>Ontdek de kracht van <span>lymfedrainage</span> en <span>sportmassage</span> voor een optimaal herstel</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-wrapper">
            <div class="home-image-overlay">
                <div>
                    <nuxt-img src="/images/new-lymfedrainage-1.jpg" alt="Afbeelding Lymfedrainage" loading="lazy" width="500" height="300"></nuxt-img>
                </div>
            </div>
            <div class="home-image-overlay">
                <div>
                    <nuxt-img src="/images/new-lymfedrainage-3.jpg" alt="Afbeelding Lymfedrainage" loading="lazy" width="300" height="300"></nuxt-img>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

.home-image-overlay:nth-child(2) {
    display: none;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-wrapper {
    width: 100%;
    height: 100%;
    max-width: 47rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-intro-contain{
    display: flex;
    flex-wrap: wrap;
    padding: 8rem 1.5rem 0 1.5rem;
}

.home-intro-contain h1{
    font-size: 6rem;
    line-height: 6rem;
}

.home-intro-contain span{
    color: var(--secondary);
    font-family: bebas-neue-pro, sans-serif;
    margin: 0 1.5rem;
}

.home-intro-contain img{
    margin: 0 0 1rem 1rem;
}

.wrapper{
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem 1rem 1.5rem;
    text-align: left;
}

.wrapper h1{
    font-size: 6rem;
    line-height: 6rem;
    padding: 0 0 3rem 0;
}

.home-intro-contain-text{
    padding: 0rem 1.5rem 3.5rem 1.5rem;
    display: flex;
    gap: 2rem;
    max-width: 40rem;
}

.home-intro-contain-text img {
    margin-top: 1rem;
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

.home-intro-contain-text span{
    font-weight: 600;
}

.home-image-overlay div{
    overflow: clip;
    width: 100%;
    height: 18rem;
    background-color: var(--secondary);
}

.home-image-overlay img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

@media (min-width: 45rem){

    .container{
        padding: 3rem 0;
    }

    .wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .home-intro-contain-text{
        margin-top: 1rem;
    }

    .home-intro-contain img{
        margin: 0 1.5rem 1rem 1rem;
    }

    .image-wrapper{
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .home-image-overlay div{
        width: 25rem;
        height: 18rem;
    }

    .home-image-overlay:nth-child(2){
        display: block;
        margin-top: -3rem
    }

    .home-image-overlay:nth-child(2) div{
        width: 15rem;
        height: 18rem;
    }

}

@media (min-width: 70rem){

    .home-wrapper {
        max-width: 58.5rem; 
    }

    .home-intro-contain h1{
        font-size: 8rem;
        line-height: 8rem;
    }

    .wrapper h1{
        font-size: 8rem;
        line-height: 8rem;
    }

    .home-image-overlay div{
        width: 40rem;
        height: 25rem;
    }

    .home-image-overlay:nth-child(2){
        display: block;
        padding-right: 3rem;
        margin-top: -3rem
    }

    .home-image-overlay:nth-child(2) div{
        width: 15rem;
        height: 20rem;
    }

}

@media (min-width: 90rem){

    .container{
        padding: 5rem 0;
    }

    .home-wrapper {
        max-width: 64rem; 
    }

    .home-intro-contain h1{
        font-size: 9rem;
        line-height: 9rem;
    }

    .home-wrapper h1{
        font-size: 9rem;
        line-height: 9rem;
    }

    .image-wrapper{
        margin-top: -3rem;
        gap: 5rem;
    }

    .home-image-overlay:nth-child(2){
        margin-top: -4rem
    }

    .home-image-overlay:nth-child(2) div{
        width: 20rem;
        height: 25rem;
    }

}
</style>