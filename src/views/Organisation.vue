<template>
  <div :class="b()">
    <c-slider :slides="slides" />
    <h1 :class="b('title')">
      Über Uns
    </h1>
    <h2 :class="b('sub-title')">
      Fischereiverein Romanshorn (FVR)
    </h2>
    <div v-html="parsedText" :class="b('content')"></div>
  </div>
</template>

<script>
  import marked from 'marked/marked.min';

  export default {
    name: 'organisation',
    metaInfo: {
      title: 'Verein',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Der Fischerverein Romanshorn hat in den letzten 66 Jahren diverse Höhen und '
            + 'Tiefen erlebt. Heute präsentiert sich der Verein in bester Verfassung,was sich '
            + 'erfreulicherweise auch in den Mitgliederzahlen bemerkbar macht. Aktuell erfreuen '
            + 'wir uns über mehr als 50 Aktivmitglieder.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Sportfischer, Verein, Romanshorn, Fischer, Fisch, Sportverrein, Club',
        }
      ]
    },
    components: {
      cSlider: () => import('../components/c-slider'),
    },
    // mixins: [],

    // props: {},
    data() {
      return {
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/a496b3ed83/bodensee_1.jpg',
            alt: 'Fischerboot in Sonnenuntergang'
          },
        ],
      };
    },

    computed: {
      /**
       * Gets the parsed content text.
       *
       * @returns {String}
       */
      parsedText() {
        const { getTexts } = this.$store.getters;
        const introText = getTexts.find(item => item.slug === 'about-us');

        return introText ? marked(introText.text, { sanitize: true }) : '';
      },
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
  .organisation {
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

    &__content {
      max-width: 1000px;
      margin: 0 auto $spacing--100;

      h3 {
        @extend %heading-h2;
        @include font($font-size--24, null, $font-weight--bold);

        margin-top: $spacing--30;
      }

      h3:first-of-type {
        margin-top: $spacing--70;
      }
    }

    &__intro-text {
      margin-bottom: $spacing--80;
    }
  }
</style>
