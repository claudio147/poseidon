<template>
  <div :class="b()">
    <h1 :class="b('title')">
      Sie haben Fragen? Nehmen Sie direkt übers Online Formular mit uns Kontakt auf.
    </h1>
    <div :class="b('content')">
      <div :class="b('form-wrapper')">
        <c-contact-form />
      </div>
      <div :class="b('map-wrapper')">
        <img src="../assets/map.png" alt="">
        <img src="../assets/street-view.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import cContactForm from '../components/c-contact-form';

  export default {
    name: 'contact',
    components: {
      cContactForm,
    },
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
  .contact {
    padding: $spacing--30 0;

    @include media(sm) {
      padding: 100px 0;
    }

    &__title {
      font-family: $font-family--primary;
      font-size: $font-size--32;
      margin-bottom: $spacing--50;
    }

    &__content {
      @include media(sm) {
        display: flex;
        justify-content: space-between;
      }
    }

    &__form-wrapper {
      margin-bottom: $spacing--30;

      @include media(sm) {
        flex: 1 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin-bottom: 0;
      }
    }

    &__map-wrapper {
      @include media(sm) {
        flex: 1 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        padding-top: 24px;
      }

      img {
        max-width: 100%;
      }

      img:first-of-type {
        margin-bottom: $spacing--40;
      }
    }
  }
</style>
