<template>
  <div :class="b()">
    <h1 :class="b('code')">
      404
    </h1>
    <p :class="b('text')">
      Die gesuchte Seite wurde leider nicht gefunden.
    </p>
    <a :class="b('link')" href="/">
      zur Startseite
    </a>
    <img :class="b('img')"
         src="../assets/fish_404.png"
         alt="Toter Fisch">
  </div>
</template>

<script>
  export default {
    name: 'error',
    // components: {},
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

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
  .error {
    position: relative;
    width: 100%;

    &__code {
      font-size: 80px;
      font-weight: $font-weight--bold;
      color: $color-primary--1;
      z-index: 1;
      position: relative;

      @include media(sm) {
        font-size: 200px;
      }

      @include media(lg) {
        font-size: 300px;
      }

    }

    &__img {
      position: absolute;
      top: 50%;
      right: 0;
      filter: grayscale(100%);
      opacity: 0.05;
      max-width: 100%;
    }
  }
</style>
