<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-wrapper-text">
    <h1>Heb je vragen?</h1>
    <h2>Ik sta voor je klaar!</h2>
    <p>Heb je vragen, wil je meer informatie over mijn massages of wil je een afspraak maken? Aarzel niet om contact met
      mij op te nemen. Ik kijk ernaar uit om u te verwelkomen in mijn praktijk!</p>
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
  margin-top: 8rem;
}

h1, p {
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: 1rem;
  color: var(--secondary);
}

.flex-wrapper-text {
  margin-left: 1.5rem;
}

form {
  margin-left: 1.5rem;
  margin-bottom: 4rem;
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