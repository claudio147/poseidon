<template>
  <router-link :class="b()" :to="detailUrl" :title="news.title">
    <!-- Image -->
    <img v-if="image"
         :src="image.src"
         :srcset="getSrcSet(image.src)"
         :sizes="sizes"
         :alt="image.alt"
         :class="b('image')">

    <!-- Content -->
    <div :class="b('content')">
      <div v-if="dateFormatted"
           :class="b('date')">
        {{ dateFormatted }}
      </div>
      <h3 :class="b('title')">
        {{ news.title }}
      </h3>
      <p :class="b('text')">
        {{ news.teaserText }}
      </p>
    </div>
    <div :class="b('footer')">
      <span>mehr dazu</span>
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
    data() {
      return {
        /**
         * @type {String} Defines the sizes for the img element.
         */
        sizes: [
          '(min-width: 0px) 740px',
          '(min-width: 768px) 540px',
          '(min-width: 1200px) 450px',
        ].join(','),
      };
    },

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

      /**
       * Gets the formatted date (for e.g. 15. Januar 2020).
       *
       * @returns {String}
       */
      dateFormatted() {
        const { date } = this.news || {};

        return date ? this.$dayjs(date).format('DD. MMMM YYYY') : null;
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

    methods: {
      /**
       * Gets the srcset string for the givin original image src.
       *
       * @param {String} originalSrc - The original image src.
       *
       * @returns {String}
       */
      getSrcSet(originalSrc) {
        const baseUrl = originalSrc.split('//a.storyblok.com/')[1];

        return [
          `https://img2.storyblok.com/480x0/${baseUrl} 480w`,
          `https://img2.storyblok.com/600x0/${baseUrl} 600w`,
          `https://img2.storyblok.com/920x0/${baseUrl} 920w`,
          `https://img2.storyblok.com/1200x0/${baseUrl} 1200w`,
          `https://img2.storyblok.com/1500x0/${baseUrl} 1500w`,
        ].join(',');
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-news-teaser {
    display: flex;
    flex-direction: column;
    color: $color-grayscale--1000;
    background-color: $color-secondary--2;

    &:hover,
    &:visited,
    &:active {
      color: $color-grayscale--1000;
    }

    &__image {
      max-width: 100%;
    }

    &__content {
      flex: 1;
      padding: $spacing--15 $spacing--15 0;
    }

    &__date {
      @include font($font-size--14);

      color: $color-grayscale--1000;
      margin-bottom: $spacing--20;
    }

    &__title {
      @include font($font-size--24);
    }

    &__text {
      font-family: $font-family--secondary;
    }

    &__footer {
      padding-bottom: $spacing--15;
      align-self: flex-end;

      span {
        padding-right: $spacing--15;
        border-bottom: 1px solid $color-grayscale--1000;
      }
    }
  }
</style>
