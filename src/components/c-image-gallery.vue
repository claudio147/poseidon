<template>
  <div :class="b()">
    <div :class="b('image-wrapper')">
      <div v-for="(img, index) in images"
           v-lazy:background-image="{
             src: img.thumbnailWebP,
             loading: img.loadingUrl,
             error: img.thumbnailUrl
           }"
           :key="`${index}-${img.alt}`"
           :class="b('image-container')"
           @click="galleryIndex = index">
      </div>
    </div>
    <LightGallery
      :images="imageUrls"
      :index="galleryIndex"
      disable-scroll
      @close="galleryIndex = null"
    />
  </div>
</template>

<script>
  import { LightGallery } from 'vue-light-gallery';

  /**
   * Image gallery component with «lightbox» swiper function.
   */
  export default {
    name: 'c-image-gallery',
    components: {
      LightGallery,
    },
    // mixins: [],

    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        galleryIndex: null,
      };
    },

    computed: {
      /**
       * Gets a list of only the URLs of the images.
       *
       * @returns {Array.<String>}
       */
      imageUrls() {
        return this.images.map(img => img.url);
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
  .c-image-gallery {
    &__image-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: -5px;

      @include media(sm) {
        margin: -7px;
      }

      @include media(md) {
        margin: -10px;
      }
    }

    &__image-container {
      border: 5px solid $color-grayscale--1000;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      flex: 1 0 50%;
      max-width: 50%;

      @include media(sm) {
        flex: 1 0 25%;
        max-width: 25%;
        border-width: 7px;
      }

      @include media(md) {
        flex: 1 0 20%;
        max-width: 20%;
        border-width: 10px;
      }
    }

    &__image-container[lazy="loading"] {
      filter: blur(4px);
    }

    &__image-container::before {
      content: '';
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }

    &__image {
      max-width: 100%;
    }

    /* Plugin styling */
    .light-gallery__modal {
      background: rgba($color-grayscale--0, 0.9) !important;
    }

    .light-gallery__close {
      background: none !important;
    }

    .light-gallery__prev,
    .light-gallery__next {
      background: rgba($color-primary--1, 0.8) !important;
    }
  }
</style>
