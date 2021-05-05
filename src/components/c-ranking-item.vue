<template>
  <div :class="b()">
    <div :class="b('image-wrapper')">
      <img :class="b('image')"
           :src="item.image"
           :srcset="srcSet"
           :sizes="sizes"
           :alt="item.fish"
      >
    </div>
    <div :class="b('content')">
      <div :class="b('label', { fish: true })">
        <e-icon icon="i-fish" inline />
        <span :class="b('value')">{{ item.fish || '?' }}</span>
      </div>
      <div :class="b('label', { length: true })">
        <e-icon icon="i-ruler" inline />
        <span :class="b('value')">{{ item.length || '?' }}</span>
      </div>
      <div :class="b('label', { weight: true })">
        <e-icon icon="i-weight" inline />
        <span :class="b('value')">{{ item.weight || '?' }}</span>
      </div>
      <div :class="b('label', { name: true })">
        <e-icon icon="i-user" inline />
        <span :class="b('value')">{{ item.name || '?' }}</span>
      </div>
    </div>
  </div>
</template>

<script>

  /**
   * Renders the CMS component for rankings.
   */
  export default {
    name: 'c-ranking-item',
    components: {
      eIcon: () => import('../components/e-icon'),
    },
    // mixins: [],

    props: {
      /**
       * The ranking item from storyblok.
       */
      item: {
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
          '(min-width: 1200px) 500px',
          '(min-width: 480px) 350px',
          '(min-width: 0px) 480px',
        ].join(','),
      };
    },

    computed: {
      /**
       * Gets the srcset string for the givin original image src.
       *
       * @param {String} originalSrc - The original image src.
       *
       * @returns {String}
       */
      srcSet() {
        const { image } = this.item || {};

        if (image) {
          const baseUrl = image.split('//a.storyblok.com/')[1];

          return [
            `https://img2.storyblok.com/350x0/${baseUrl} 350w`,
            `https://img2.storyblok.com/480x0/${baseUrl} 480w`,
            `https://img2.storyblok.com/600x0/${baseUrl} 600w`,
            `https://img2.storyblok.com/1200x0/${baseUrl} 1200w`,
          ].join(',');
        }

        return image;
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
  .c-ranking-item {
    @include media(xs) {
      display: flex;
    }

    &__content {
      padding: $spacing--20 $spacing--20 0;
      display: flex;
      flex-wrap: wrap;
      background-color: $color-secondary--2;

      @include media(sm) {
        flex: 1 0 auto;
        padding-bottom: 0 0 0 $spacing--20;
        /*background-color: transparent;*/
      }
    }

    &__image-wrapper {
      max-width: 100%;

      @include media(xs) {
        flex: 1 0 50%;
        max-width: 50%;
      }

      @include media(sm) {
        flex-basis: 200px;
        max-width: 200px;
      }

      @include media(md) {
        flex-basis: percentage(1/3);
        max-width: percentage(1/3);
      }
    }

    &__image {
      max-width: 100%;
    }

    &__label {
      flex: 1 0 50%;
      max-width: 50%;
      margin-bottom: $spacing--30;
      display: flex;
      flex-direction: column;
      align-items: center;

      @include media(sm) {
        flex: 1 0 25%;
        max-width: 25%;
        margin-bottom: 0;
      }

      .e-icon,
      svg {
        width: 50px;
        height: 50px;

        @include media(sm) {
          width: 80px;
          height: 80px;
        }
      }

      path,
      rect {
        fill: $color-grayscale--1000;

        @include media(sm) {
          //fill: $color-primary--1;
        }
      }
    }

    &__value {
      @include font($font-size--18, 18px, $font-weight--bold);

      color: $color-grayscale--1000;
      margin-top: $spacing--10;
      text-align: center;
      max-width: 100%;
      hyphens: auto;

      @include media(xs) {
        margin-top: $spacing--20;
      }

      @include media(sm) {
        @include font($font-size--24, 24px, $font-weight--bold);
      }
    }
  }
</style>
