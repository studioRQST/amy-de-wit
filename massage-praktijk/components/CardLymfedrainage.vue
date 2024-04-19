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
        <nuxt-link href="/" aria-label="Link naar pagina Lymfedrainage">
            <button class="primary-button">Lees meer 
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="26" fill="#9C866C"/>
                <path d="M17.3985 31.5512C16.9573 31.8834 16.8689 32.5104 17.2012 32.9516C17.5334 33.3927 18.1604 33.4811 18.6015 33.1488L17.3985 31.5512ZM34.0626 21.1395C34.1397 20.5926 33.7588 20.0868 33.2119 20.0098L24.2999 18.7542C23.753 18.6772 23.2472 19.0581 23.1702 19.605C23.0931 20.1519 23.474 20.6576 24.0209 20.7347L31.9427 21.8507L30.8267 29.7725C30.7496 30.3194 31.1305 30.8252 31.6774 30.9022C32.2243 30.9793 32.7301 30.5984 32.8071 30.0515L34.0626 21.1395ZM18.6015 33.1488L33.6739 21.7988L32.4708 20.2012L17.3985 31.5512L18.6015 33.1488Z" fill="#FFFBF6"/>
                </svg>
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


</style>