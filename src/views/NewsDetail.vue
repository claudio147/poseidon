<template>
  <div :class="b()">
    <div :class="b('action-bar')">
      <router-link :class="b('back-link')" to="/news" title="zurück zur Übersicht">
        zur Übersicht
      </router-link>
      <vue-goodshare-facebook
        :page_url="url"
        title_social="Teilen"
        has_icon
      />
    </div>
    <h2 :class="b('date')">
      {{ dateFormatted }}
    </h2>
    <h1 v-if="newsEntry" :class="b('title')">
      {{ newsEntry.title }}
    </h1>
    <div v-html="parsedText" :class="b('content')"></div>
  </div>
</template>

<script>
  import marked from 'marked/marked.min.js';
  import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
  import news from '../mixins/news';

  /**
   * News detail page.
   */
  export default {
    name: 'news-detail',
    components: {
      VueGoodshareFacebook,
    },
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
          },
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
      url() {
        return window ? window.location.href : '';
      },
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

    &__action-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: $spacing--10;
    }

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

    .button-social {
      background-color: $color-primary--1;
      color: $color-grayscale--1000 !important;
    }
  }
</style>
