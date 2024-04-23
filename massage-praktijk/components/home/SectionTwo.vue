<script setup lang="ts">

</script>

<template>
    <section>
        <div class="intro-contain">
            <img src="/static/icons/icon-logo-verticaal.svg" alt="Icoon Logo">
            <h2><span>Ervaar</span> mijn massages</h2>
        </div>
        <div class="intro-contain-text">
            <h4>Laat mij je begeleiden op een reis van herstel en vernieuwing</h4>
        </div>
        <CardLymfedrainage/>
        <CardSportmassage/>
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


</style>