<template>
  <div :class="b()">
    <h1 :class="b('title')">
      Impressionen
    </h1>
    <div v-for="gallery in galleries"
         :key="gallery.id"
         :class="b('block')">
      <h2 v-if="gallery.title" :class="b('sub-title')">
        {{ gallery.title }}
      </h2>
      <p :class="b('description')">
        {{ gallery.text }}
      </p>
      <c-image-gallery :images="gallery.images" />
    </div>
  </div>
</template>

<script>
  import cImageGallery from '../components/c-image-gallery';

  export default {
    name: 'gallery',
    components: {
      cImageGallery,
    },
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the list of images.
       *
       * @returns {Array.<Object>}
       */
      galleries() {
        return this.$store.getters.galleryImages || [];
      }
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.galleries.length) {
        this.$store.dispatch('fetchGallery', { vm: this });
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
  .gallery {
    padding-top: $spacing--50;

    &__block {
      margin-bottom: $spacing--70;
    }

    &__title {
      font-family: $font-family--primary;
      font-size: $font-size--32;
      margin-bottom: $spacing--50;
    }

    &__sub-title {
      @include font($font-size--22);

      font-weight: $font-weight--bold;
    }

    &__description {
      @include font($font-size--16);

      font-weight: $font-weight--regular;
    }
  }
</style>
