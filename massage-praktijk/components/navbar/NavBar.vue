<script setup lang="ts">

</script>

<template>
  <header>

    <a href="/">
      <NavbarLogoNav/>
    </a>

    <div class="header-wrapper">

      <!-- Use a checkbox input for toggling -->
      <input id="toggle" type="checkbox">

      <!-- Label for the checkbox -->
      <label for="toggle" class="hamburger">

        <!-- SVG for hamburger icon -->
        <a class="hamburger-icon">
          <h6>Menu</h6>
        <svg  width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM1 9H35V7H1V9Z" fill="#9C866C"/>
        </svg>
        </a>

        <!-- Close icon -->
        <a class="close-icon">
          <h6>Menu</h6>
        <svg  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L15.1421 15.1421" stroke="#9C866C" stroke-width="2" stroke-linecap="round"/>
          <path d="M1.07104 15.2132L15.2132 1.07109" stroke="#9C866C" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </a>

      </label>

      <div class="nav">
        <div class="nav-wrapper">
          <nav>
            <ul class="menu">
              <li><a href="/" class="menu-item">Home</a></li>
              <li><a href="/massages" class="menu-item">Massages</a></li>
              <li><a href="/over-mij" class="menu-item">Over mij</a></li>
              <li><a href="/contact" class="menu-item">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped>


/* Hide the checkbox */
#toggle {
  display: none;
}

/* Styles for close icons */
.close-icon svg {
  cursor: pointer;
  margin-top: 0.33rem;
}

/* Initially hide close icon */
.close-icon {
  display: none;
}

/* Show close icon when checkbox is checked */
#toggle:checked + .hamburger .close-icon {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

/* Hide hamburger icon when checkbox is checked */
#toggle:checked + .hamburger .hamburger-icon {
  display: none;
}

/**
  Hamburger
**/
.hamburger {
  position: fixed;
  top: 5em;
  right: 2%;
  margin-left: -5em;
  margin-top: -45px;
  width: 2em;
  height: 40px;
  z-index: 5;
}

.hamburger-icon {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.hamburger-icon svg {
  margin-top: 0.35rem;
}

.hamburger a {
  position: relative;
  width: 10rem;
  height: 3rem;
  margin-top: 1px;
  margin-left: -5rem;
  transition: all 0.3s ease-in-out;
}


/**
Nav Styles
**/
.nav {
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: -100%;

  left: 0;
  right: 0;
  bottom: 0;



  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: var(--background-color);
}

.nav-wrapper {
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


}

nav {
  margin-top: 1%;
  text-align: left;

  font-size: 1.5rem;

  margin-left: 3rem;

}

nav a {
  position: relative;
  text-decoration: none;
  font-size: 2em;
  display: inline-block;
  margin-top: 1.25em;
  transition: color 0.2s ease-in-out;
  letter-spacing: 1px;


}

ul {
  list-style: none;
  margin-bottom: 5rem;
}

nav a:hover {
  color: var(--secondary);
}

nav a:hover:before {
  height: 100%;
}

/**
Animations
**/
#toggle:checked + .hamburger + .nav {
  top: 0;
  transform: scale(1);
}
</style>
