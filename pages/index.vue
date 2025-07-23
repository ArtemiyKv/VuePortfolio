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
import type {ProjectResponseType} from "~/contracts/projectResponseType";

const {data: experience} = await useAsyncData('exp-content', (): Promise<Array<ExperienceResponse> | null> => {
  return queryCollection('experience').first()
})

const {data: projects} = await useAsyncData('projects-content', (): Promise<Array<ProjectResponseType> | null> => {
  return queryCollection('projects').first()
})
</script>

<style lang="scss" scoped>
div {
  padding-top: 76px;
}
</style>