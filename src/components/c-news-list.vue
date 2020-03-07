<template>
  <ul :class="b()">
    <li v-for="item in computedNewsList" :key="item.id" :class="b('item')">
      <c-news-teaser :news="item" />
    </li>
  </ul>
</template>

<script>
  import cNewsTeaser from './c-news-teaser';
  import news from '../mixins/news';

  /**
   * This component renders a list of news teaser items.
   */
  export default {
    name: 'c-news-list',
    components: {
      cNewsTeaser,
    },
    mixins: [
      news,
    ],

    props: {
      /**
       * Defines the maximum amount of items to show.
       */
      maxItems: {
        type: Number,
        default: 0,
      }
    },
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the news items from the vuex store.
       *
       * @returns {Array.<Object>}
       */
      computedNewsList() {
        if (Array.isArray(this.newsList)) {
          return this.maxItems > 0 ? this.newsList.slice(0, this.maxItems) : this.newsList;
        }

        return [];
      }
    },
    // watch: {},

    // beforeCreate() {},
    // created() {},
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
  .c-news-list {
    @extend %list-reset;

    @include media(sm) {
      display: flex;
      flex-wrap: wrap;
      margin: (-$spacing--40) (-$spacing--30);
    }

    @include media(sm) {
      margin: (-$spacing--40) (-$spacing--15);
    }

    &__item {
      margin-bottom: $spacing--40;

      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding: $spacing--40 $spacing--30;
      }

      @include media(lg) {
        flex-basis: percentage(1/3);
        max-width: percentage(1/3);
        padding: $spacing--40 $spacing--15;
      }

      .c-news-teaser {
        height: 100%;
      }
    }
  }
</style>
