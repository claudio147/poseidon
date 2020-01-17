<template>
  <router-link :class="b()" :to="detailUrl" :title="news.title">
    <!-- Image -->
    <img v-if="image"
         :src="image.src"
         :alt="image.alt"
         :class="b('image')">

    <!-- Content -->
    <div :class="b('content')">
      <div :class="b('date')">
        {{ news.date }}
      </div>
      <h3 :class="b('title')">
        {{ news.title }}
      </h3>
      <p :class="b('text')">
        {{ news.teaserText }}
      </p>
    </div>
  </router-link>
</template>

<script>

  /**
   * This component is used to render a news article as a teaser.
   */
  export default {
    name: 'c-news-teaser',
    // components: {},
    // mixins: [],

    props: {
      /**
       * The news item.
       */
      news: {
        type: Object,
        default: null,
      },
    },
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the url to the detail page.
       *
       * @returns {String}
       */
      detailUrl() {
        const { id } = this.news || {};

        return id ? `/news/${id}` : '/news';
      },

      /**
       * Gets the teaser image of the news article.
       *
       * @returns {Object}
       */
      image() {
        const { image } = this.news || {};

        return image || null;
      },
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
  .c-news-teaser {
    display: block;
    color: $color-grayscale--1000;
    background-color: $color-grayscale--0;

    &:hover,
    &:visited,
    &:active {
      color: $color-grayscale--1000;
    }

    &__image {
      max-width: 100%;
    }

    &__content {
      padding: $spacing--10 $spacing--10 $spacing--20;
    }

    &__date {
      @include font($font-size--14);

      color: $color-grayscale--500;
      margin-bottom: $spacing--20;
    }

    &__title {
      @include font($font-size--24);
    }

    &__text {
      font-family: $font-family--secondary;
    }
  }
</style>
