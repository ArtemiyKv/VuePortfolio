<template>
  <div>
    <AppAbout/>
    <AppSkills/>
    <AppExperience :experience="experience?.meta.body"/>
  </div>
  {{ experience?.meta.body }}
</template>

<script lang="ts" setup>
import AppExperience from '~/components/AppExperience.vue';
import type { ExperienceResponse } from '~/contracts/experienceResponseType';

const {data: experience} = await useAsyncData('123', (): Promise<ExperienceResponse[]>=>{
  return queryCollection('experience').first()
})
</script>

<style lang="scss" scoped>
div {
  padding-top: 76px;
}
</style>