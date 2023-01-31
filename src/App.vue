<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
