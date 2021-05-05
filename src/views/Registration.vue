<template>
  <div :class="b()">
    <c-slider :slides="slides" />
    <h1 :class="b('title')">
      Anmeldung
    </h1>
    <h2 :class="b('sub-title')">
      Werden Sie jetzt Mitglied und melden Sie sich direkt übers Online Formular an.
    </h2>
    <div :class="b('content')">
      <c-registration-form />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'registration',
    components: {
      cRegistrationForm: () => import('../components/c-registration-form'),
      cSlider: () => import('../components/c-slider'),
    },
    metaInfo: {
      title: 'Anmeldung',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Werden Sie jetzt Mitglied und melden Sie sich direkt übers Online Formular an.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Anmeldung, Registration, Mitglieder-werden, Sportfischer, Verein, Romanshorn, '
            + 'Fischer, Fisch, Sportverrein, Club',
        }
      ]
    },
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      return {
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/3e721ce9ba/slider_06.jpg',
            alt: 'Mood Bild eines Fischerboots auf einem See.'
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
  .registration {
    &__title {
      @extend %heading-h1;

      margin-top: $spacing--50;
      text-align: center;
    }

    &__sub-title {
      @extend %heading-h2;

      text-align: center;
    }

    &__content {
      max-width: 1000px;
      margin: 0 auto;
      padding: $spacing--50 0;
    }
  }
</style>
