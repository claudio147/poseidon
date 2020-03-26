<template>
  <div :class="b()">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src"
             :srcset="getSrcSet(slide.src)"
             :sizes="sizes"
             :alt="slide.alt">
      </swiper-slide>
      <div v-if="slides.length > 1" slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>

  /**
   * Basic swiper component.
   */
  export default {
    name: 'c-slider',
    // components: {},
    // mixins: [],

    props: {
      /**
       * Holds the slides for the swiper.
       */
      slides: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        /**
         * @type {Object} Defines the swiper options. (See API Doc.).
         */
        swiperOption: {
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },

        /**
         * @type {String} Defines the sizes for the img element.
         */
        sizes: [
          '100vw',
          '(min-width: 2400px) 2400px',
        ].join(','),
      };
    },

    // computed: {},
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
        const baseUrl = originalSrc.split('https://a.storyblok.com/')[1];

        return [
          `https://img2.storyblok.com/480x0/${baseUrl} 480w`,
          `https://img2.storyblok.com/920x0/${baseUrl} 920w`,
          `https://img2.storyblok.com/1240x0/${baseUrl} 1240w`,
          `https://img2.storyblok.com/1680x0/${baseUrl} 1680w`,
          `https://img2.storyblok.com/1920x0/${baseUrl} 1920w`,
          `https://img2.storyblok.com/2400x0/${baseUrl} 2400w`,
        ].join(',');
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-slider {
    max-width: 2400px;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    @include media(xxl) {
      margin-left: -1200px;
      margin-right: -1200px;
     /* margin-left: 0;
      margin-right: 0;
      left: 0;
      right: 0;
      width: 100%;*/
    }

    img {
      max-width: 100%;
    }

    .swiper-pagination-bullet-active {
      background: $color-secondary--1;
    }
  }
</style>
