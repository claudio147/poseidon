<template>
  <div :class="b()">
    <h1>Gallery</h1>
    <img v-for="(img, index) in images"
         :key="`${index}-${img.filename}`"
         :src="img.filename"
         :alt="img.name">
  </div>
</template>

<script>
  export default {
    name: 'gallery',
    // components: {},
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
      images() {
        return this.$store.getters.galleryImages || [];
      }
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.images.length) {
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
  }
</style>
