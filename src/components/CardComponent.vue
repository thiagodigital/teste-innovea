<template>
  <article class="uk-article">
    <img class="uk-margin-remove" :src="data.urlToImage" alt="" />
    <h4 class="uk-article-title">{{ data.title }}</h4>
    <p class="uk-article-meta">
      Escrito por
      <a href="#" v-if="data.author">{{ data.author }}</a>
      <a href="#" v-else>Autor desconhecido</a>
      {{ setDate(data.publishedAt) }}.
    </p>
    <p class="uk-article-meta">
      Publicado em
      <a :href="data.url">{{ data.source.name }}</a>
    </p>
    <p>{{ data.content }}</p>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    data: {
      type: [Array, Object],
    },
  },
  methods: {
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
};
</script>
