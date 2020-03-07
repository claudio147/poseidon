<template>
  <div :class="b()">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" :alt="slide.alt">
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

    // methods: {},
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
