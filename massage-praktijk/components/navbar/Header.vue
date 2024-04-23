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

      <ul>
        <li><nuxt-link href="/" data-text="Home">Home</nuxt-link></li>
        <li><nuxt-link href="/massages" data-text="Massages">Massages</nuxt-link></li>
        <li><nuxt-link href="/over-mij" data-text="Over Mij">Over Mij</nuxt-link></li>
        <li><nuxt-link href="/contact" data-text="Contact">Contact</nuxt-link></li>
      </ul>

      <nav class="menu">
			<div class="menu__item">
				<nuxt-link href="/" class="menu__item-link">Home</nuxt-link>
				<img class="menu__item-img" src="/static/images/lymfedrainage.avif" alt="Some image"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Home</span>
						<span>Home</span>
						<span>Home</span>
						<span>Home</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<nuxt-link href="/massages" class="menu__item-link">Massages</nuxt-link>
				<img class="menu__item-img" src="/static/images/lymfedrainage.avif" alt="Some image"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Massages</span>
						<span>Massages</span>
						<span>Massages</span>
						<span>Massages</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<nuxt-link href="/over-mij" class="menu__item-link">Over mij</nuxt-link>
				<img class="menu__item-img" src="/static/images/lymfedrainage.avif" alt="Some image"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Over mij</span>
						<span>Over mij</span>
						<span>Over mij</span>
						<span>Over mij</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<nuxt-link href="/contact" class="menu__item-link">Contact</nuxt-link>
				<img class="menu__item-img" src="/static/images/lymfedrainage.avif" alt="Some image"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Contact</span>
						<span>Contact</span>
						<span>Contact</span>
						<span>Contact</span>
					</div>
				</div>
			</div>
		</nav>

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

.menu{
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
  border-bottom: solid 1px #EFE6DC;
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
  z-index: 102;
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

.wrapper ul {
  position: absolute;
  width: 100%;
  top: 20%;
  left: 0;
  height: 100%;
  list-style: none;
  text-align: left;
}

.wrapper ul li {
  width: 100%;
  height: 5%;
  margin-bottom: 3rem;
}

.wrapper ul li a {
  position: absolute;
  text-decoration: none;
  font-size: 4rem;
  color: var(--primary);
  margin: 0 1.5rem;
  opacity: 0;
  transition: all 0.3s ease, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100%);
}

.wrapper ul li a:hover {
  color: var(--secondary);
  transition: none;
}

.wrapper ul li a:focus-visible {
  outline: none;
  background-color: var(--secondary);
}

#active:checked ~ .wrapper ul li a {
  opacity: 1;
  transform: translateX(0%);
}

#active:checked ~ .wrapper ul li:nth-child(1) a {
  transition-delay: 0.3s; 
}

#active:checked ~ .wrapper ul li:nth-child(2) a {
  transition-delay: 0.6s; 
}

#active:checked ~ .wrapper ul li:nth-child(3) a {
  transition-delay: 0.9s; 
}

#active:checked ~ .wrapper ul li:nth-child(4) a {
  transition-delay: 1s;
}

.contact-items {
  z-index: 108;
  position: fixed;
  display: flex;
  gap: 2rem;
  width: 100%;
  bottom: 0;
  background-color: var(--primary);
  transform: translateX(100%);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

#active:checked ~ .wrapper .contact-items {
  transform: translateX(0%);
}

.contact-items div {
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 1.5rem;
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

@media (min-width: 50rem) {

.sticky-header {
  padding: 1rem 0 2rem 0;
}

.logo {
  margin: 2rem 0 0 3rem;
}

#active:checked ~ .wrapper{
  right: 0;
  top: 2.5rem;
}

.menu-btn {
  right: 3rem;
  top: 2.5rem;
}

.close {
  right: 3rem;
  top: 2.5rem;
}

.wrapper ul {
  top: 15%;
  padding-left: 2rem;
}

.wrapper ul li {
  margin-bottom: 3rem;
}

.wrapper ul li a {
  font-size: 4.5rem;
}

.contact-items {
  gap: 3rem;
  padding: 1rem 3rem;
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

.menu-contact-button{
  display: block;
  margin: 1.5rem 15rem 0 0;
}

#active:checked + .menu-btn p {
  color: white;
}

.logo {
  margin: 2rem 0 0 4rem;
}

.close {
    right: 3rem;
    order: 2;
}

.wrapper {
  display: flex;
  width: 100%; 
  top: 0;
}

.wrapper ul {
  display: none;
  width: 70%;
  top: 25%;
}

.wrapper ul li {
  margin-bottom: 6rem;
}

.wrapper ul li a {
  font-size: 7rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  right: 0;
  order: 1;
}

.flex-contain{
  position: absolute;
  bottom: 5rem;
  right: 0;
}

.flex-contain div {
  padding: 1rem 4rem 2rem 0; 
}

#active:checked + .menu-btn:before {
  border-color: var(--background-color);
  z-index: 110;
}

#active:checked + .menu-btn:after {
  border-color: var(--background-color);
  z-index: 110;
}

/* Nieuwe nav desktop  */

.menu {
  display: block;
	padding: 15vh 0;
	--offset: 20vw;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	counter-reset: menu;
}

.menu__item {
	cursor: default;
	position: relative;
	padding: 0rem 10rem;
  margin-bottom: 2rem;
}

.menu__item-link {
	cursor: pointer;
  text-decoration: none;
}

.menu__item-link:hover {
	transition-duration: 0.1s;
	opacity: 0;
}

.menu__item-img {
  z-index: 120;
	pointer-events: none;
	position: absolute;
	height: 30vh;
	max-height: 300px;
	opacity: 0;
	left: 85vw;
	transform: translate3d(calc(-100% - 6vw),-30%,0) translate3d(0,20px,0);
}

.menu__item-link:hover + .menu__item-img {
	opacity: 1;
	transform: translate3d(calc(-100% - 6vw),-30%,0) rotate3d(0,0,1,4deg);
	transition: all 0.4s;
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

.menu__item-link:hover ~ .marquee .marquee__inner {
	animation-play-state: running;
	opacity: 1;
	transition-duration: 0.4s;
}

.marquee span {
	text-align: center;
}

.menu__item-link {
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 7rem;
  line-height: 7rem;
  color: var(--primary);
  white-space: nowrap;
	padding: 0 1.5rem;
}

.marquee span {
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 7rem;
  line-height: 7rem;
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
}


</style>

