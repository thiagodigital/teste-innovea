<template>
  <div class="uk-container uk-container-large">
    <div
      uk-height-viewport="expand: true"
      class="uk-flex uk-flex-center uk-flex-middle"
      v-if="count == 0"
    >
      <div>
        <div uk-spinner></div>
        <span class="uk-margin-left">Carregando...</span>
      </div>
    </div>
    <div
      class="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-child-width-1-3@xl uk-child-width-1-4@xxl"
      uk-grid="masonry: true"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100; repeat: true"
      v-else
    >
      <div v-for="(article, index) in articles" :key="index">
        <CardComponent :data="article" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CardComponent from "../components/CardComponent.vue";
import api from "../services/apiService";
export default {
  data() {
    return {
      articles: [],
      count: 0,
    };
  },
  methods: {
    async getArticles() {
      const res = await api.get("/everything");
      const articles = await res.data.articles;
      const count = res.data.totalResults;
      this.articles = articles;
      this.count = count;
      console.log(articles);
    },
  },
  components: {
    CardComponent,
  },
  mounted() {
    this.getArticles();
  },
};
</script>
