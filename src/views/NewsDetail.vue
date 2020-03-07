<template>
  <div :class="b()">
    <router-link :class="b('back-link')" to="/news" title="zurück zur Übersicht">
      zur Übersicht
    </router-link>
    <h2 :class="b('date')">
      {{ dateFormatted }}
    </h2>
    <h1 :class="b('title')">
      {{ newsEntry.title }}
    </h1>
    <div v-html="parsedText" :class="b('content')"></div>
  </div>
</template>

<script>
  import marked from 'marked/marked.min.js';
  import news from '../mixins/news';

  /**
   * News detail page.
   */
  export default {
    name: 'news-detail',
    // components: {},
    mixins: [
      news,
    ],

    // Meta information
    metaInfo() {
      return {
        title: this.newsEntry && this.newsEntry.title,
        meta: [
          {
            vmid: 'description',
            name: 'description',
            content: this.newsEntry && this.newsEntry.teaserText,
          },
          {
            vmid: 'keywords',
            name: 'keywords',
            content: this.newsEntry && this.newsEntry.keywords,
          }
        ]
      };
    },

    // props: {},
    data() {
      return {
        /**
         * @type {String} Holds the id for the requested news entry.
         */
        newsId: '',
      };
    },

    computed: {
      parsedText() {
        const { text } = this.newsEntry || {};

        return text ? marked(text, { sanitize: true }) : '';
      },

      /**
       * Gets the formatted date (for e.g. 15. Januar 2020).
       *
       * @returns {String}
       */
      dateFormatted() {
        const { date } = this.newsEntry || {};

        return date ? this.$dayjs(date).format('DD. MMMM YYYY') : null;
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      const { params } = this.$route;

      if (params && params.id) {
        this.newsId = params.id;
      }
    },
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},

    // methods: {},
    // render() {},
  };
</script>

<style lang="scss">
  .news-detail {
    padding-top: $spacing--80;

    &__title {
      @extend %heading-h1;

      text-align: center;
      margin-bottom: $spacing--50;
    }

    &__date {
      @extend %heading-h2;

      font-size: $font-size--22;
      text-align: center;
    }

    &__back-link {
      color: $color-primary--1;
      text-decoration: underline;

      &:hover {
        color: $color-secondary--2;
        text-decoration: underline;
      }
    }

    &__content {
      max-width: 1000px;
      margin: 0 auto;

      img {
        max-width: 100%;
      }
    }
  }
</style>
