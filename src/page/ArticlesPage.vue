<template>
  <div class="uk-container">
    <div uk-spinner v-if="count == 0">Carregando</div>
    <div class="uk-grid uk-child-width-1-2" uk-grid v-else>
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
