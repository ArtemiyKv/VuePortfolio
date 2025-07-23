<script setup lang="ts">

import type {PropType} from "vue";
import type {ProjectResponseType} from "~/contracts/projectResponseType";

defineProps({
  projects: {
    type: Array as PropType<Array<ProjectResponseType>>
  }
})

</script>

<template>
<article class="projects">
  <h1 class="article-title">
    My <b>Projects</b>
  </h1>
  <div v-for="project in projects?.body" class="project__item">
    <div class="project__item__image">
      <img :src="`images/projects/${project.img}.jpg`" alt="project-image">
    </div>
    <div class="project__item__text">
      <h2>{{ project.index }}</h2>
      <h2>{{ project.title }}</h2>
      <p>{{project.text}}</p>
      <a :href="project.link" target="_blank"><img src="/images/linkWhite.svg">Visit project</a>
    </div>
  </div>
</article>
</template>

<style scoped lang="scss">
@use "/assets/scss/app/projects";
</style>