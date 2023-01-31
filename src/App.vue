<template>
  <HeaderComponent />
  <RouterView />
</template>

<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>
