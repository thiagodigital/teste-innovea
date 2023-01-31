<template>
  <div class="uk-card uk-card-default">
    <article class="uk-article">
      <div class="uk-card-media-top">
        <img class="uk-margin-remove" :src="data.urlToImage" alt="" />
      </div>
      <div class="uk-card-body">
        <h4 class="uk-article-title">{{ data.title }}</h4>
        <div class="uk-article-meta">
          <p class="uk-margin-remove">
            Escrito por
            <a href="#" v-if="data.author">{{ data.author }}</a>
            <a href="#" v-else>Autor desconhecido</a>
            {{ setDate(data.publishedAt) }}. Publicado em
            <a :href="data.url">{{ data.source.name }}</a>
          </p>
        </div>
        <p>{{ data.content }}</p>
      </div>
    </article>
  </div>
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
