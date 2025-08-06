<script setup lang="ts">
import type {ProjectItemResponseType} from "~/contracts/ProjectItemResponseType";

const props = defineProps({
  project: {
    type: Object as PropType<ProjectItemResponseType>
  },
  projectSlug: {
    type: String,
  }
})
</script>

<template>
  <section class="project">
      <p>{{ project?.text }}</p>
      <img :src="`/images/projects/${projectSlug}/${project?.image}`">
  </section>
</template>

<style scoped lang="scss">
@use "assets/scss/slug/project-item.scss";
</style>