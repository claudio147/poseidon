<template>
  <div :class="b()">
    <a :class="b('map-link')" href="https://www.google.ch/maps/place/47%C2%B034'24.2%22N+9%C2%B022'26.6%22E/@47.573397,9.3735138,19z/data=!3m1!4b1!4m20!1m13!4m12!1m3!2m2!1d9.3740569!2d47.5733978!1m6!1m2!1s0x479afd68a90ad591:0x1f84d64ed67113b9!2sRomanshorn,+8590!2m2!1d9.3771959!2d47.5657078!3e0!3m5!1s0x0:0x0!7e2!8m2!3d47.5733969!4d9.3740609" target="_blank">
      <img src="../assets/slider_map.jpg" alt="">
    </a>
    <h1 :class="b('title')">
      Sie haben Fragen?
    </h1>
    <h2 :class="b('subtitle')">
      Nehmen Sie direkt übers Online Formular mit uns Kontakt auf.
    </h2>
    <div :class="b('content')">
      <div :class="b('form-wrapper')">
        <c-contact-form />
      </div>
      <div :class="b('map-wrapper')">
        <img src="../assets/street-view.png" alt="">
        <p>
          Gerne können Sie uns auch eine E-mail schreiben unter:
          <a href="" @click.prevent="onClickEmail">
            info@fischereiverein-romanshorn.ch
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import cContactForm from '../components/c-contact-form';

  export default {
    name: 'contact',
    metaInfo: {
      title: 'Kontakt',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Kontakt aufnehmen mit dem Fischereiverein Romanshorn.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Kontakt, Standort, E-mail, Anfahrt, Lage, Romanshorn',
        }
      ]
    },
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

    methods: {
      onClickEmail() {
        window.location.href = 'mailto:info@fischereiverein-romanshorn.ch';
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .contact {
    padding-bottom: $spacing--100;

    &__map-link {
      display: block;
      max-width: 2400px;
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: $spacing--50;

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
    }

    &__title {
      @extend %heading-h1;

      text-align: center;
    }

    &__subtitle {
      @extend %heading-h2;

      text-align: center;
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
