<template>
  <div>
    <MainGreetings/>
    <MainSkills/>
    <MainExperience :experience="experience"/>
    <MainAbout/>
    <MainProjects :projects="projects"/>
  </div>
</template>

<script lang="ts" setup>
import AppExperience from '~/components/Main/Experience.vue';
import type {ExperienceResponse} from '~/contracts/experienceResponseType';
import type {MyProjectsResponseType} from "~/contracts/MyProjectsResponseType";

const {data: experience} = await useAsyncData('exp-content', () => {
  return queryCollection('experience').first()
})

const {data: projects} = await useAsyncData('projects-content', () => {
  return queryCollection('projects').first()
})
</script>

<style lang="scss" scoped>
div {
  padding-top: 76px;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>