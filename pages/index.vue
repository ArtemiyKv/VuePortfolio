<template>
  <div>
    <AppGreetings/>
    <AppSkills/>
    <AppExperience :experience="experience"/>
    <AppAbout/>
  </div>
</template>

<script lang="ts" setup>
import AppExperience from '~/components/App/Experience.vue';
import type { ExperienceResponse } from '~/contracts/experienceResponseType';

const {data: experience} = await useAsyncData('exp-content', (): Promise<Array<ExperienceResponse> | null> =>{
  return queryCollection('experience').first()
})
</script>

<style lang="scss" scoped>
div {
  padding-top: 76px;
}
</style>