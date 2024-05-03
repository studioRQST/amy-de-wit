<template>
    <section>
        <div class="wrapper">
            <div class="intro-contain">
                <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
                <h2><span>Ervaar</span> mijn massages</h2>
            </div>
            <div class="intro-contain-text">
                <p>Laat mij je begeleiden op een reis van herstel en vernieuwing</p>
            </div>
        </div>
        <CardLymfedrainage/>
        <CardSportmassage/>
        <CardVoetreflex/>
    </section>
</template>

<style scoped>

.intro-contain{
    display: flex;
    gap: 1rem;
    padding: 5rem 1.5rem 2rem 1.5rem;
}

.intro-contain h2{
    max-width: 20rem;
}

.intro-contain span{
    font-family: bebas-neue-pro, sans-serif;
    color: var(--secondary);
}

.intro-contain img{
    margin-bottom: 4rem;
}

.intro-contain-text{
    padding: 0rem 1.5rem 3.5rem 3.5rem;
}

.intro-contain-text p { 
    text-transform: uppercase;
}

@media (min-width: 40rem){

    .wrapper{
        padding: 5rem 3rem;
    }

    .intro-contain{
        padding: 5rem 0 2rem 0;
    }

    .intro-contain img{
        margin-bottom: 4rem;
    }

    .intro-contain-text{
        padding: 0 0 0 3rem;
    }
}

@media (min-width: 70rem){

    .wrapper{
        display: flex;
        align-items: flex-end;
        padding: 13rem 4rem 2rem 4rem;
    }

    .intro-contain{
        padding: 0;
    }

    .intro-contain h2{
        max-width: 24rem;
    }

    .intro-contain img{
        margin: 0 3rem 6rem 0;
        width: 1.5rem;
    }

    .intro-contain-text{
        padding: 0 0 1rem 0;
        max-width: 30rem;
    }
}

@media (min-width: 90rem){

    .wrapper{
        display: flex;
        align-items: flex-end;
        padding: 15rem 4rem 4rem 4rem;
    }
}

</style>