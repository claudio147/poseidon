<template>
  <div :class="b()">
    <h1 :class="b('title')">
      Impressionen
    </h1>
    <h2 :class="b('sub-title')">
      Entdecken Sie hier einige Impressionen zum Vereinsleben und zu aktuellen Vereins Anlässen.
    </h2>
    <div v-for="gallery in galleries"
         :key="gallery.id"
         :class="b('block')">
      <h3 v-if="gallery.title" :class="b('gallery-title')">
        {{ gallery.title }}
      </h3>
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

    metaInfo: {
      title: 'Galerie',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Entdecken Sie hier einige Impressionen zum Vereinsleben und zu aktuellen '
            + 'Vereins Anlässen.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Fotos, Bilder, Veranstaltungen, Vereinstreff, Fischereiverein, Fischereiverein',
        }
      ]
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
      @extend %heading-h1;

      text-align: center;
    }

    &__sub-title {
      @extend %heading-h2;

      text-align: center;
      margin-bottom: $spacing--50;
    }

    &__gallery-title {
      @extend %heading-h2;

      font-weight: $font-weight--bold;
    }

    &__description {
      @include font($font-size--20);

      color: $color-primary--1;
      font-weight: $font-weight--regular;
    }
  }
</style>
