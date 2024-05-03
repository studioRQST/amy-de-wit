<template>
  <div>
    <link rel="stylesheet" href="https://use.typekit.net/rtt3tac.css">
    <!-- <PageLoader/> -->
    <NuxtLayout>
      <NuxtPage/>
        <nuxt-link class="whatsapp-wrapper" href="https://wa.me/610629690" aria-label="Stuur Amy een Whatsapp!">
          <div class="whatsapp-background">
            <div class="whatsapp-image">
              <img alt="WhatsApp Icoon" src="/static/icons/icon-whatsapp.svg"/>
            </div>
          </div> 
        </nuxt-link>
    </NuxtLayout>
  </div>
</template>


<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* WhatsApp-toepassing */
.whatsapp-wrapper {
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: auto;
  bottom: 1rem;
  left: auto;
  right: 1rem;
  transition: transform 0.3s ease-in-out, opacity 0.4s;
}

.whatsapp-background {
  width: 100%;
  height: 100%;
  background-color: #32D951;
  border-radius: 100%;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-image {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.whatsapp-wrapper:hover .whatsapp-background {
  transform: scale(1.1);
  box-shadow: 0 0 10px var(--secondary);
}

.whatsapp-wrapper:focus .whatsapp-background {
  background-color: #128C7E;
}

@media (min-width: 40rem){
  .whatsapp-wrapper{
    bottom: 3rem;
    right: 3rem;
  }
}


</style>
