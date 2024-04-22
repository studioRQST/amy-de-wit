<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper-text">
      <h2>Maak een <span>afspraak</span> bij Amy!</h2>
      <p>Neem vandaag nog contact op om een afspraak te maken bij Massagepraktijk Amy de Wit. Ik kijk ernaar uit om je te
        verwelkomen en je te helpen op jouw pad naar herstel en welzijn.</p>
    </div>

    <form action="https://api.web3forms.com/submit" method="POST">

      <!-- Replace with your Access Key -->
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

      <!-- Form Inputs. Each input must have a name="" attribute -->
      <label for="naam">Naam:</label>
      <input placeholder=" Jouw naam..." type="text" name="name" required>

      <label for="e-mail">Email:</label>
      <input placeholder=" Jouw e-mailadres..." type="email" name="email" required>

      <label for="bericht">Jouw bericht:</label>
      <textarea placeholder=" Typ hier jouw bericht..."name="message" required></textarea>

      <!-- hCaptcha Spam Protection -->
      <div class="h-captcha" data-captcha="true"></div>

      <button type="submit">Verzenden</button>

    </form>
  </section>
</template>

<style scoped>
section {
  margin-top: 4rem;
}



span {
  color: var(--secondary);
  font-family: bebas-neue-pro, sans-serif;
}

.flex-wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

form {
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: work-sans, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--tertiary);

}

input {
  height: 1.8rem;
  width: 19rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  font-family: work-sans, sans-serif;
}

textarea {
  height: 10rem;
  width: 19rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  font-family: work-sans, sans-serif;
}

input:focus,
textarea:focus{
  outline-color: var(--tertiary);
}
</style>