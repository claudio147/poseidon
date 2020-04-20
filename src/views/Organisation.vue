<template>
  <div :class="b()">
    <c-slider :slides="slides" />
    <h1 :class="b('title')">
      Über Uns
    </h1>
    <h2 :class="b('sub-title')">
      Fischereiverein Romanshorn (FVR)
    </h2>
    <div :class="b('content')">
      <div :class="b('intro-text')">
        <p>
          Der Fischerverein Romanshorn hat in den letzten 66 Jahren diverse Höhen und Tiefen erlebt.
          Heute präsentiert sich der Verein in bester Verfassung,was sich erfreulicherweise auch
          in den Mitgliederzahlen bemerkbar macht.
          Aktuell erfreuen wir uns über mehr als 50 Aktivmitglieder.
        </p>
        <p>Seit 2019 führen wir eine Jungfischergruppe mit 10 Jungfischern.</p>
        <p>Gemeinsam treffen wir uns im Jahr an 10 bis 12 Anlässen.</p>
        <p>Der Höhepunkt des Jahres ist das Fischessen das an einem Wochenende im August stattfindet.</p>
        <p>Herzlich willkommen im Fischerverein Romanshorn!</p>
        <p><b>Petri Heil!</b></p>
      </div>

      <h3 :class="b('content-title')">
        Verein
      </h3>
      <p>Der Fischereiverein Romanshorn (FVR) ist ein Seefischerverein mit Sitz in Romanshorn.</p>

      <h3 :class="b('content-title')">
        Vereinsleben
      </h3>
      <p>
        Die Mitglieder des FVR pflegen einen offenen und hilfsbereiten Umgang.
      </p>

      <h3 :class="b('content-title')">
        Fischerei
      </h3>
      <p>
      </p>
      <p>
        Die Mitglieder des FVR halten sich an die bestehenden Gesetze und den vom Schweizerischen
        Fischereiverband definierten Ethik- Kodex.
      </p>

      <h3 :class="b('content-title')">
        Gewässerschutz
      </h3>
      <p>
      </p>
      <p>
        Die Mitglieder des FVR tragen Sorge zu den ihnen zur Verfügung stehenden Gewässern und
        beteiligen sich aktiv am Schutz derselben. Sie sind sich bewusst, dass nur mit einer
        ganzheitlichen Sichtweise eine nachhaltige Fischerei betrieben werden kann.
      </p>

      <h3 :class="b('content-title')">
        Vernetzung
      </h3>
      <p>
        Der FVR pflegt Kontakt zu den umliegenden Vereinen und den übergeordneten Organisationen.
      </p>
    </div>
  </div>
</template>

<script>
  import cSlider from '../components/c-slider';

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
      cSlider,
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
    }

    &__intro-text {
      margin-bottom: $spacing--80;
    }

    &__content-title {
      @extend %heading-h2;
      @include font($font-size--24, null, $font-weight--bold);

      margin-top: $spacing--30;
    }
  }
</style>
