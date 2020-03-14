<template>
  <div :class="b()">
    <c-slider :slides="slides" />
    <h1 :class="b('title')">
      Jungfischer
    </h1>
    <h2 :class="b('sub-title')">
      Der Fischereiverein Romanshorn hat eine aktive Nachwuchsförderung.
    </h2>
    <div :class="b('content-block')">
      <p :class="b('content-block-left')">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetet
        ur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ma
        gna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum d
        olor sit amet....
      </p>
      <img :class="b('content-block-right')" src="../assets/man-holding-a-gray-fish-3338528.jpg" alt="">
    </div>

    <!-- CTA -->
    <div :class="b('cta-wrapper')">
      <div :class="b('cta-inner')">
        <span>
          Jetzt Mitglied werden!
        </span>
        <router-link to="/registration" :class="b('cta-button')">
          zur Anmeldung
          <e-icon icon="i-contact"
                  width="30"
                  height="30" />
        </router-link>
      </div>
    </div>

    <h2 :class="b('sub-title')">
      Unsere Jungfischer Betreuer
    </h2>
    <div :class="b('person-block')">
      <div :class="b('person-left')">
        <img src="../assets/adult-beard-boy-casual-220453.jpg" alt="">
        <h4 :class="b('person-name')">
          Max Hose
        </h4>
      </div>
      <div :class="b('person-right')">
        <img src="../assets/women-s-white-and-black-button-up-collared-shirt-774909.jpg" alt="">
        <h4 :class="b('person-name')">
          Jana Pullover
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  import eIcon from '../components/e-icon';
  import cSlider from '../components/c-slider';

  export default {
    name: 'talents',
    components: {
      eIcon,
      cSlider,
    },
    metaInfo: {
      title: 'Jungfischer',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Der Fischereiverein Romanshorn hat eine aktive Nachwuchförderung',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Fischereiverein, Angeln, Nachwuchs, Jungfischer, Talente, Hobbys',
        }
      ]
    },
    // mixins: [],

    // props: {},
    data() {
      return {
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/3c8196bbf9/slider_08.jpg',
            alt: 'Jungfischer am Angeln'
          }
        ],
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
  .talents {
    &__title {
      @extend %heading-h1;

      text-align: center;
      margin-top: $spacing--50;
    }

    &__sub-title {
      @extend %heading-h2;

      text-align: center;
      margin-bottom: $spacing--50;
    }

    &__content-block {
      margin-bottom: $spacing--50;

      @include media(sm) {
        display: flex;
      }
    }

    &__content-block-left,
    &__content-block-right {
      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
      }
    }

    &__content-block-left {
      @include media(sm) {
        padding-right: $spacing--15;
      }
    }

    &__content-block-right {
      max-width: 100%;

      @include media(sm) {
        padding-left: $spacing--15;
        max-width: 50%;
      }
    }

    &__cta-wrapper {
      @extend %heading-h2;

      padding: $spacing--15 0;
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      background-color: $color-primary--1;
      color: $color-grayscale--1000;
      margin-bottom: $spacing--50;

      @include media(sm) {
        padding: $spacing--30 0;
        margin-bottom: $spacing--80;
      }
    }

    &__cta-inner {
      display: block;
      max-width: $contentWidth;
      margin: 0 auto;
      padding: 0 $spacing--15;

      @include media(sm) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__cta-button,
    &__cta-button:hover {
      color: $color-grayscale--1000;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid $color-grayscale--1000;
      margin-top: $spacing--15;

      @include media(sm) {
        margin-top: 0;
        justify-content: flex-start;
      }

      .e-icon {
        margin-left: $spacing--10;
      }
    }

    &__person-block {
      max-width: 1000px;
      margin: $spacing--50 auto;

      @include media(sm) {
        display: flex;
      }

      img {
        max-width: 100%;
      }
    }

    &__person-left {
      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding-right: $spacing--15;
      }
    }

    &__person-right {
      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding-left: $spacing--15;
      }
    }

    &__person-name {
      @include font($font-size--18);

      text-align: center;
      color: $color-primary--1;
    }
  }
</style>
