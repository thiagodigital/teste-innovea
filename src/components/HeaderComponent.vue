<template>
  <header
    class="uk-section uk-section-small"
    uk-sticky="start: 300; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky uk-background-default uk-box-shadow-small; cls-inactive: uk-section uk-section-small"
  >
    <div class="uk-container">
      <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div class="uk-navbar-center">
          <a
            class="uk-navbar-item uk-logo uk-text-uppercase"
            href="#"
            aria-label="Back to Home"
          >
            <img src="../assets/logo.svg" alt="" />
            {{ branding }}<b>news</b>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      branding: "",
    };
  },
  mounted() {
    this.branding = import.meta.env.VITE_SUBJECT;
  },
};
</script>
