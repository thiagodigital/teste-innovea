<template>
  <div class="uk-container">
    <div uk-spinner v-if="count == 0">Carregando</div>
    <div class="uk-grid uk-child-width-1-2" v-else>
      <div v-for="(article, index) in articles" :key="index">
        <article class="uk-article">
          <img class="uk-margin-remove" :src="article.urlToImage" alt="" />
          <h4 class="uk-article-title">{{ article.title }}</h4>
          <p class="uk-article-meta">
            Escrito por
            <a href="#" v-if="article.author">{{ article.author }}</a>
            <a href="#" v-else>Autor desconhecido</a>
            {{ setDate(article.publishedAt) }}.
          </p>
          <p class="uk-article-meta">
            Publicado em
            <a :href="article.url">{{ article.source.name }}</a>
          </p>
          <p>{{ article.content }}</p>
        </article>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
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
    setDate(date: Date) {
      let formatDate = new Date(date);
      let currentDate = new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(formatDate);
      return currentDate;
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
