<template>
  <nav class="sticky-header" role="navigation">
    <div class="logo">
      <nuxt-link href="/" aria-label="Home">
        <NavbarMainLogo alt="Logo van Amy de Wit"/>
      </nuxt-link>
    </div>
    <div class="menu-contact-button">
        <nuxt-link href="/contact" aria-label="Link naar pagina contact">
            <button class="primary-button">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Contact</span>
            </button>
        </nuxt-link>
      </div>
    <input type="checkbox" id="active">
    <label for="active" class="menu-btn" aria-label="Toggle Menu">
      <p>Menu</p>
      <span></span>
    </label>
    <label for="active" class="close"></label>
    <div class="wrapper">
       <div class="menu">
        <div class="menu__item">
          <nuxt-link href="/" class="menu__item-link">Home</nuxt-link>
          <img class="menu__item-img" id="left" src="/static/images/lymfedrainage.avif" alt="Some image"/>
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Home</span> <NavbarIconNavLinks/>
              <span>Home</span> <NavbarIconNavLinks/>
              <span>Home</span> <NavbarIconNavLinks/>
              <span>Home</span> <NavbarIconNavLinks/>
           </div>
         </div>
        </div>
        <div class="menu__item">
          <nuxt-link href="/massages" class="menu__item-link">Massages</nuxt-link>
          <img class="menu__item-img" id="right"  src="/static/images/lymfedrainage-2.avif" alt="Some image"/>
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Massages</span> <NavbarIconNavLinks/>
              <span>Massages</span> <NavbarIconNavLinks/>
              <span>Massages</span> <NavbarIconNavLinks/>
              <span>Massages</span> <NavbarIconNavLinks/>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <nuxt-link href="/over-mij" class="menu__item-link">Over mij</nuxt-link>
          <img class="menu__item-img" id="left"  src="/static/images/lymfedrainage.avif" alt="Some image"/>
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Over mij</span> <NavbarIconNavLinks/>
              <span>Over mij</span> <NavbarIconNavLinks/>
              <span>Over mij</span> <NavbarIconNavLinks/>
              <span>Over mij</span> <NavbarIconNavLinks/>
            </div>
          </div>
        </div>
        <div class="menu__item ">
          <nuxt-link href="/contact" class="menu__item-link ">Contact </nuxt-link>
          <img class="menu__item-img"  id="right" src="/static/images/lymfedrainage-2.avif" alt="Some image"/>
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Contact</span> <NavbarIconNavLinks/>
              <span>Contact</span> <NavbarIconNavLinks/>
              <span>Contact</span> <NavbarIconNavLinks/>
              <span>Contact</span> <NavbarIconNavLinks/>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-items">
        <div class="flex-contain">
          <div>
            <h3>Contact</h3>
            <nuxt-link href="mailto:info@amydewit.nl">info@amydewit.nl</nuxt-link>
            <nuxt-link href="tel:+31610629690">+31610629690</nuxt-link>
          </div>
          <div>
            <h3>Adres</h3>
            <p>Elbaweg 30</p>
            <p>1607 MP Hem</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.menu-contact-button{
  display: none;
}

.nav-open {
  overflow: hidden;
}

.sticky-header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 101;
  background-color: var(--background-color);
  padding-bottom: 1.5rem;
  /* border-bottom: solid 1px #EFE6DC; */
}

.logo {
  margin: 2rem 0 0 1.5rem;
}

.wrapper {
  position: fixed;
  right: -100%;
  height: 100%;
  width: 100%;
  background: var(--background-color);
  transition: all 0.6s ease-in-out;
}

#active:checked ~ .wrapper{
  right: 0;
}

.menu-btn {
  position: absolute;
  z-index: 112;
  right: 1rem;
  top: 1.5rem;
  height: 50px;
  width: 50px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.menu-btn p {
  position: absolute;
  top: 0.9rem;
  right: 4rem;
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.3rem;
  transition: all 0.3s ease-in-out;
}

.menu-btn span,
.menu-btn:before,
.menu-btn:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid var(--tertiary);
  transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.menu-btn:before {
  transform: translateY(-8px);
}

.menu-btn:after {
  transform: translateY(8px);
}

.close {
  z-index: 111;
  cursor: pointer;
  position: absolute;
  top: 1.5rem; 
  right: 3rem;
  width: 50px; 
  height: 50px;
}


input[type="checkbox"] {
  display: none;
}

#active:checked + .menu-btn span {
  transform: scaleX(0);
}

#active:checked + .menu-btn:before {
  transform: rotate(45deg);
  border-color: var(--tertiary);
}

#active:checked + .menu-btn:after {
  transform: rotate(-45deg);
  border-color: var(--tertiary);
}

.menu {
	--offset: 20vw;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	counter-reset: menu;
  padding: 20vh 0;

}

.menu__item {
  cursor: pointer;
  position: relative;
  margin-bottom: 2rem;
}

.menu__item-link {
  text-decoration: none;
}

.menu__item-link:hover {
	opacity: 0;
}

.menu__item-img {
  z-index: 120;
	pointer-events: none;
	position: absolute;
	height: 10vh;
	max-height: 300px;
	opacity: 0;
	left: 85vw;
	transform: translate3d(calc(-100% - 6vw),-30%,0) translate3d(0,20px,0);

}





.marquee {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	overflow: hidden;
	pointer-events: none;
}

.marquee__inner {
	width: fit-content;
	display: flex;
	position: relative;
	transform: translate3d(var(--move-initial), 0, 0);
	animation: marquee 5s linear infinite;
	animation-play-state: paused;
	opacity: 0;
	transition: opacity 0.1s;
}



.marquee span {
	text-align: center;
}

.menu__item-link {
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 4rem;
  line-height: 4rem;
  color: var(--primary);
  white-space: nowrap;
	padding: 0 1.5rem;
}

.marquee span {
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 4rem;
  line-height: 4rem;
  color: var(--secondary);
  white-space: nowrap;
	padding: 0 1.5rem;
}

@keyframes marquee {
	0% {
		transform: translate3d(var(--move-initial), 0, 0);
	}

	100% {
		transform: translate3d(var(--move-final), 0, 0);
	}
}

#active:checked ~ .wrapper .contact-items {
  transform: translateX(0%);
}

.contact-items {
  z-index: 108;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: var(--primary);
  padding: 2rem 1.5rem;
}

.flex-contain{
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.flex-contain div {
  display: flex;
  flex-direction: column;
}

.contact-items h3,
.contact-items h4,
.contact-items a,
.contact-items p {
  color: var(--background-color);
  font-size: 0.8rem;
  line-height: 1.1rem;
}

.contact-items a,
.contact-items p {
  font-family: work-sans, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
}

.contact-items a:hover {
  outline: none;
  font-weight: 600;
  text-decoration: underline;
}

.contact-items a:focus-visible {
  outline: none;
  font-weight: 600;
  text-decoration: underline;
}

@media (min-width: 40rem) {

.logo {
  margin: 2rem 0 0 3rem;
}

#active:checked ~ .wrapper{
  right: 0;
}

.menu-btn {
  right: 3rem;
  top: 1.5rem;
}

.close {
  right: 3rem;
  top: 1.5rem;
}

.menu {
  padding: 20vh 0;
}

.menu__item-link {
  font-size: 5.5rem;
  line-height: 5.5rem;
}



.marquee span {
  font-size: 5.5rem;
  line-height: 5.5rem;
}

.contact-items {
  background-color: var(--primary);
  padding: 3rem 3rem;
}

.flex-contain{
  gap: 3rem;
}

.contact-items h3,
.contact-items h4,
.contact-items a,
.contact-items p {
  font-size: 1rem;
  line-height: 1.3rem;
}
}

@media (min-width: 70rem) {

  .menu__item:nth-child(even) {
    flex-direction: row-reverse; /* Reverse the direction for even menu items */
  }

  .menu__item:nth-child(odd) {
    flex-direction: row; /* Keep the direction as default for odd menu items */
  }


  .menu-contact-button{
  display: block;
  margin: 2rem 15rem 0.5rem 0;
}

#active:checked + .menu-btn p {
  color: var(--background-color)
}

.logo {
  margin: 2.5rem 0 0 4rem;
}

.menu-btn {
  right: 3rem;
  top: 2rem;
}

.close {
  right: 3rem;
  top: 2rem;
}

#active:checked + .menu-btn:before {
  border-color: var(--background-color);
}

#active:checked + .menu-btn:after {
  border-color: var(--background-color);
}

.menu__item {
  padding-left: 10rem;
}

.menu__item-img {
	height: 30vh;
}

.menu__item-link {
  font-size: 7rem;
  line-height: 7rem;
}

.marquee span {
  font-size: 7rem;
  line-height: 7rem;
}

.contact-items {
  position: absolute;
  width: 30%;
  height: 100%;
  right: 0;
  background-color: var(--primary);
  padding: 2rem 1.5rem;
}

.flex-contain{
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  flex-direction: column;
}

  .menu__item-link:hover + #right {
    opacity: 1;
    transform: translate3d(calc(-100% - 10vw),-30%,0) rotate3d(0,0,1,4deg);
    transition: all 0.4s;
  }

  .menu__item-link:hover + #left {
    opacity: 1;
    transform: translate3d(-150%, -30%, 0) rotate3d(0, 0, 1, -4deg);
    transition: all 0.4s;
  }

  .menu__item-link:hover ~ .marquee .marquee__inner {
    animation-play-state: running;
    opacity: 1;
    transition-duration: 0.4s;
  }




}

</style>

<script setup lang="ts">
import IconNavLinks from "~/components/navbar/IconNavLinks.vue";
</script>