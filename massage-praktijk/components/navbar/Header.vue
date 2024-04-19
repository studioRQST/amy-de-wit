<template>
  <nav class="sticky-header" role="navigation">
    <div class="logo">
      <nuxt-link href="/" aria-label="Home">
        <NavbarMainLogo alt="Logo van Amy de Wit"/>
      </nuxt-link>
    </div>
    <input type="checkbox" id="active">
    <label for="active" class="menu-btn" aria-label="Toggle Menu">
      <!-- <p>Menu</p> -->
      <span></span>
    </label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
        <li><nuxt-link href="/">Home</nuxt-link></li>
        <li><nuxt-link href="/">Massages</nuxt-link></li>
        <li><nuxt-link href="/">Over Mij</nuxt-link></li>
        <li><nuxt-link href="/">Contact</nuxt-link></li>
      </ul>
      <div class="contact-items">
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
  </nav>
</template>

<style scoped>

.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 101;
  background-color: var(--background-color);
  padding-bottom: 1rem;
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
  z-index: 2;
  right: 1rem;
  top: 1.5rem;
  height: 50px;
  width: 50px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.menu-btn p {
  font-family: bebas-neue-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: left;
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
  z-index: 104;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
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
  transition-delay: none;
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
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--primary);
  padding: 1rem 0;
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
  line-height: 1.4rem;
}

.contact-items a,
.contact-items p {
  font-family: work-sans, sans-serif;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
}

</style>
