<template>
  <footer
    class="uk-section uk-section-small uk-section-secondary uk-margin-large-top"
  >
    <div class="uk-container">
      <div class="uk-flex uk-flex-between">
        <div>
          <img class="branding" src="../assets/logo.svg" alt="" /> {{ branding
          }}<b>news</b>
        </div>
        <div>
          <small
            >Powered by <a href="https://newsapi.org/">newsapi.org</a></small
          >
        </div>
      </div>
    </div>
  </footer>
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
