<template>
  <div :class="b()">
    <h1>News Detail</h1>
    <div v-html="parsedText"></div>
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
  }
</style>
