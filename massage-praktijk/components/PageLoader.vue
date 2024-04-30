<template>
  <div class="page-loader">
    <div class="logo-container">
      <!-- linkerdeel -->
      <svg class="logo-left" width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.4179 23.2309C28.2871 23.4588 29.1476 23.6955 29.9382 24.0812C30.5278 24.3704 31.4844 24.9884 31.5412 25.7422C31.6591 27.3682 23.9804 26.049 23.1636 25.9394C19.3111 25.431 14.5283 26.0797 11.2043 23.8314C7.87595 21.5743 5.64832 18.147 3.49058 14.8337C2.78735 13.7556 2.07102 12.5942 1.48135 11.3714C0.550988 9.44739 -0.0648854 7.37877 0.188452 5.25755C0.498573 2.6367 2.46413 1.09399 4.9713 0.787207C11.6891 -0.0235897 16.1706 7.65926 21.6567 10.7096C22.7967 11.3451 27.2825 14.7987 23.81 15.719C23.7008 15.7497 23.5916 15.7585 23.4781 15.7585C23.2204 15.7585 22.9583 15.684 22.7049 15.6094C21.3902 15.2369 20.058 14.8556 18.8743 14.1719C18.3065 13.8476 17.7823 13.4532 17.2145 13.1245C16.5681 12.7476 16.009 12.2435 15.4892 11.7089C15.2271 11.4415 14.9738 11.161 14.7204 10.8849C14.5938 10.7491 14.4715 10.6088 14.3448 10.4729C14.2312 10.3502 14.1089 10.2275 13.9692 10.1399C13.8512 10.0653 13.7202 10.0391 13.5892 10.0829C13.4144 10.1442 13.2485 10.302 13.1655 10.4642C13.0868 10.622 13.0344 10.7929 13.0082 10.9638C12.9514 11.3057 12.9908 11.6563 13.0475 11.9981C13.1087 12.3619 13.196 12.7213 13.2441 13.0894C13.397 14.2289 14.0259 15.2588 14.7554 16.1178C16.2143 17.8402 18.206 19.0937 20.1803 20.1368C21.7964 20.987 23.4169 21.846 25.1117 22.5297C25.8498 22.8277 26.6361 23.025 27.4135 23.2309H27.4179Z" fill="#9C866C"/>
      </svg>
      <!-- middendeel -->
      <svg class="logo-center" width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.68745 18.766C0.451584 15.2161 0.774809 12.0211 1.76632 9.80783C7.22619 -2.38042 25.4884 -3.37967 29.7383 9.99191C32.7565 19.4848 29.5461 32.7556 22.4003 39.7153C10.7161 51.0927 1.58724 32.3392 0.683083 18.766H0.68745Z" fill="#9C866C"/>
      </svg>
      <!-- rechterdeel -->
      <svg class="logo-right" width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23528 23.2309C3.36606 23.4588 2.50559 23.6955 1.715 24.0812C1.12534 24.3704 0.168768 24.9884 0.111986 25.7422C-0.00594736 27.3682 7.67281 26.049 8.48961 25.9394C12.3421 25.431 17.1249 26.0797 20.4489 23.8314C23.7772 21.5743 26.0049 18.147 28.1626 14.8337C28.8658 13.7556 29.5822 12.5942 30.1718 11.3714C31.1022 9.44739 31.7181 7.37877 31.4647 5.25755C31.1546 2.6367 29.1891 1.09399 26.6819 0.787207C19.9641 -0.0235897 15.4826 7.65926 9.99653 10.7096C8.85651 11.3451 4.37068 14.7987 7.84316 15.719C7.95235 15.7497 8.06155 15.7585 8.17512 15.7585C8.43282 15.7585 8.6949 15.684 8.94823 15.6094C10.263 15.2369 11.5952 14.8556 12.7789 14.1719C13.3467 13.8476 13.8709 13.4532 14.4387 13.1245C15.0851 12.7476 15.6442 12.2435 16.164 11.7089C16.4261 11.4415 16.6794 11.161 16.9327 10.8849C17.0594 10.7491 17.1817 10.6088 17.3084 10.4729C17.422 10.3502 17.5443 10.2275 17.684 10.1399C17.802 10.0653 17.933 10.0391 18.064 10.0829C18.2387 10.1442 18.4047 10.302 18.4877 10.4642C18.5663 10.622 18.6188 10.7929 18.645 10.9638C18.7017 11.3057 18.6624 11.6563 18.6057 11.9981C18.5445 12.3619 18.4571 12.7213 18.4091 13.0894C18.2562 14.2289 17.6272 15.2588 16.8978 16.1178C15.4389 17.8402 13.4472 19.0937 11.4729 20.1368C9.85676 20.987 8.23627 21.846 6.54153 22.5297C5.80335 22.8277 5.01713 23.025 4.23964 23.2309H4.23528Z" fill="#9C866C"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    this.logoAnimation();
    gsap.to('.page-loader', { opacity: 1, duration: 0.5 });
    this.fadeOut();
  },
  methods: {
    fadeOut() {
      setTimeout(() => {
        gsap.to('.page-loader', { opacity: 0, duration: 0.5, onComplete: this.removeLoader });
      }, 2000);
    },
    removeLoader() {
      this.$el.remove();
    },
    logoAnimation() {
      // Animatie voor het linkerdeel
      gsap.fromTo('.logo-left', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out'});
      // Animatie voor het middendeel
      gsap.fromTo('.logo-center', { y: 0, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
      // Animatie voor het rechterdeel
      gsap.fromTo('.logo-right', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', onComplete: () => {
        // Na voltooiing van de animatie voor het rechterdeel, voeg een zoomanimatie toe aan het middendeel
        gsap.to('.logo-center', { scale: 80, rotate: 90, duration: 1.5, onComplete: this.fadeOut });
      } });
    },
  },
};
</script>

<style scoped>

  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
  }

  .logo-container {
    display: flex;
  }

  .logo-left, .logo-center, .logo-right {
    width: 2rem;
    height: auto;
    opacity: 0;
  }

  .logo-left {
    margin-right: -0.5rem;
  }

  .logo-right {
    margin-left: -0.5rem;
  }

  .logo-left, .logo-right {
    margin-top: 1.5rem;
  }

  @media (min-width: 40rem){
    
    .logo-left, .logo-center, .logo-right {
      width: 3rem;
    }

    .logo-left, .logo-right {
      margin-top: 2rem;
    }

  }
</style>
