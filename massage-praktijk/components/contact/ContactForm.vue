<template>
  <form action="https://api.web3forms.com/submit" method="POST">

    <!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

    <!-- Form Inputs. Each input must have a name="" attribute -->
    <div class="flex-container">
      <div>
    <label for="naam">Naam</label>
    <input placeholder=" Jouw naam..." type="text" name="name" required>
      </div>
      <div>
    <label for="e-mail">E-mail</label>
    <input placeholder=" Jouw e-mailadres..." type="email" name="email" required>
    </div>
    </div>

    <label for="bericht">Jouw bericht</label>
    <textarea placeholder=" Typ hier jouw bericht..." name="message" required></textarea>

    <!-- hCaptcha Spam Protection -->
    <div class="h-captcha" data-captcha="true"></div>

    <button class="primary-button">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
      <span class="button-text" typeof="submit">Verzenden</span>
    </button>

  </form>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: work-sans, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--tertiary);
}

input {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  font-family: work-sans, sans-serif;
  padding: 1rem;
  background-color: var(--background-color)
}

textarea {
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  font-family: work-sans, sans-serif;
  padding: 1rem;
  background-color: var(--background-color)
}

input:focus,
textarea:focus {
  outline-color: var(--tertiary);
}

@media only screen and (min-width: 48rem) {
  form {
    margin-left: 5rem;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    gap: 9rem;
  }

  input {
    width: 160%;
  }
}

</style>
<script setup lang="ts">
</script>