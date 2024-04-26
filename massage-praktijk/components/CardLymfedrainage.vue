<template>
<section class="card-element">
    <div class="image-overlay">
        <div>
            <img src="/static/images/lymfedrainage.avif" alt="Afbeelding Lymfedrainage">
        </div>
    </div>
    <div class="image-description">
        <h3>Lymfedrainage</h3>
        <h4>Ontdek de Zachte Kracht van Lymfedrainage</h4>
        <nuxt-link href="/massage/lymfedrainage" aria-label="Link naar pagina lymfedrainage">
            <button class="primary-button">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Lees meer</span>
            </button>
        </nuxt-link>
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
        padding: 4rem 0 0 5rem;
    }
    
}

@media (min-width: 70rem){

    section{
        padding: 10rem 0 0 10rem;
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
        padding: 10rem 0 0 15rem;
    }

}

</style>