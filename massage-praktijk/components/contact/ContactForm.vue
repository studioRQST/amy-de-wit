<template>
  <form action=/succes-page-form method="POST">
    <!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="af862cb0-98e2-4c82-99d6-0a8a639d5be6">

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

.flex-container div{
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--tertiary);
}

input {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  padding: 1rem;
  background-color: var(--background-color);
  font-size: 1rem;
}

textarea {
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid var(--secondary);
  font-family: work-sans, sans-serif;
  padding: 1rem;
  background-color: var(--background-color);
  resize: none;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline-color: var(--tertiary);
}

@media only screen and (min-width: 40rem) {

  .flex-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}

@media only screen and (min-width: 70rem) {

  .flex-container {
    gap: 2rem;
  }

  input {
    margin-bottom: 2rem;
  }

  textarea {
    margin-bottom: 2rem;
  }
}

</style>