<template>
  <div :class="b()">
    <c-slider :slides="slides" />
    <h1 :class="b('title')">
      Geschichte des Fischereivereins Romanshorn
    </h1>
    <h2 :class="b('sub-title')">
      seit 1954
    </h2>
    <div :class="b('content')">
      <c-milestones :milestones="milestones" />
    </div>
  </div>
</template>

<script>
  import cMilestones from '../components/c-milestones';
  import cSlider from '../components/c-slider';

  export default {
    name: 'history',
    components: {
      cMilestones,
      cSlider,
    },
    metaInfo: {
      title: 'Geschichte',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Die Geschichte des Sportfischervereins von 1954 bis heute.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Sportfischerverein, Romanshorn, Geschichte, Fischereiverein',
        }
      ]
    },
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      /* eslint-disable max-len */
      return {
        /**
         * @type {Array.<Object>} Holds the list of header slides.
         */
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/4fe84deeb4/slider_05.jpg',
            alt: 'Mood Bild eines Sees.',
          },
        ],

        /**
         * @type {Array.<Object>} Holds the list of milestones.
         */
        milestones: [
          {
            year: '2009',
            text: 'Der Verein gibt sich neue Statuten und einen neuen Namen. Ab sofort nennen wir uns «Fischereiverein Romanshorn»',
          },
          {
            year: '2004',
            text: '50 Jahre Sportfischerverein Romanshorn: grosses Fest!',
          },
          {
            year: '2001',
            text: 'Das erste Sportfischerfest wird durchgeführt'
          },
          {
            year: '1999',
            text: 'Das Reiser wird erneuert',
          },
          {
            year: '1998',
            text: 'Übernahme und Umbau des ehemaligen Vereinslokals des Kanu-Clubs. Neu treffen sich die Fischer hier jeden Freitag.',
          },
          {
            year: '1980',
            text: 'Einzug in die ehemalige Hündelerhütte an der Aach. Der SFV hat zum ersten Mal ein eigenes Vereinslokal.',
          },
          {
            year: '60er Jahre',
            text: 'Kontaktaufnahme mit dem Angelsportverein Friedrichshafen / Bau des Reisers (Laichplatz) in der Salmsacher Bucht',
          },
          {
            year: 'Ab 1963',
            text: 'Fischerstamm immer am ersten Freitag des Monats',
          },
          {
            year: '1955',
            text: 'Kauf einer vereinseigenen Schreibmaschine',
          },
          {
            year: '1954',
            text: 'Gründung des «Sportfischerverein Romanshorn» durch Fusion der beiden Sportfischervereine «Petri Heil» und «Inseli»',
          },
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
  .history {
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
      margin: $spacing--80 0;
    }
  }
</style>
