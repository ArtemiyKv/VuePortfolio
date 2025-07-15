<template>
  <section class="about">
    <div class="about__text">
    <h1>
      Hello I’m <b>Marina. </b> 
      <span>Multifaceted</span> <span>designer</span>
      with a focus on motion
    </h1>
    <p>
      Helped new brands, agencies, and studios turn ideas into
      impactful design.
      30+ successful projects. Focused on client goals, precision, and
      results. <br>You can find me on <a href="https://youtube.com">YouTube</a> and <a>Instagram.</a>
    </p>
    <div class="about__text__buttons">
      <AppButton :color="'black'" :label="'Contact'"/>
      <AppButton :color="'white'" :label="'Resume'" :pic="true"/>
    </div>
    </div>
    <div class="about__image">
      <img src="/images/girl_hero.svg">
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use "/assets/scss/app/greetings";
</style>
