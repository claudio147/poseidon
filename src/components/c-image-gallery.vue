<template>
  <div :class="b()">
    <div :class="b('image-wrapper')">
      <div v-for="(img, index) in images"
           :key="`${index}-${img.alt}`"
           :class="b('image-container')"
           :style="{ backgroundImage: `url(${img.url})` }"
           @click="galleryIndex = index">
      </div>
    </div>
    <vue-gallery-slideshow :images="images" :index="galleryIndex" @close="galleryIndex = null" />
  </div>
</template>

<script>
  import VueGallerySlideshow from 'vue-gallery-slideshow';

  export default {
    name: 'c-image-gallery',
    components: {
      VueGallerySlideshow,
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

    &__image-container::before {
      content: '';
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }

    &__image {
      max-width: 100%;
    }

    .vgs__container {
      @include media(sm) {
        top: 10vh;
      }
    }
  }
</style>
