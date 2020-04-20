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
      <div :class="b('content-block-left')">
        <!-- eslint-disable max-len -->
        <p>Die Jungfischergruppe des Fischereiverein Romanshorn wurde 2019 neu gegründet und besteht aus momentan ca. 10 Jungfischern. Das Ziel ist es, interessierten Jugendlichen zwischen 10 und 18 Jahren die Grundsätze der Fischerei, das Verständnis und den Respekt gegenüber der Natur und vor allem dem Lebewesen Fisch näher zu bringen.</p>
        <p>Die Jungfischergruppe hat jährlich zwischen acht und zehn Termine, welche vor allem am Obersee stattfinden. Es gibt aber auch Termine an anderen Gewässern der Schweiz und angrenzendem Ausland (Österreich und Deutschland).</p>
        <p>Der Mitgliederbeitrag für Jungfischer beträgt CHF 30.- pro Jahr. Bei speziellen Anlässen können zusätzliche Kosten entstehen, welche aber vorgängig mitgeteilt werden.</p>
        <p>Willkommen sind alle Jugendlichen zwischen 10 und 18 Jahren. Es ist auch nicht erforderlich, dass man eine Grundkenntnis hat. Da Markus und Michi (Verantwortlich für Aus- und Weiterbildung) Sana- Instruktoren sind, können Jungfischer optimal auf die Sana- Prüfung vorbereitet werden. Die Sana- Kurse finden in der Hütte des Fischereiverein Romanshorn statt.</p>
      </div>
      <div :class="b('content-block-right')">
        <img :srcset="getSrcSet('https://a.storyblok.com/f/73482/1500x2095/c7ecee55b1/hafen_romanshorn_8.jpg')"
             :sizes="sizes"
             alt="">
      </div>
    </div>

    <!-- CTA -->
    <div :class="b('cta-wrapper')">
      <div :class="b('cta-inner')">
        <span>
          Jetzt Mitglied werden!
        </span>
        <router-link to="/anmeldung" :class="b('cta-button')">
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
        <img src="../assets/dummy_person.jpg" alt="">
        <div :class="b('person-content')">
          <h4 :class="b('person-name')">
            Markus Schättin
          </h4>
          <a :class="b('link')"
             href="mailto:m.schaettin@fischereiverein-romanshorn.ch"
          >
            <e-icon icon="i-mail" width="20" height="20" />
            <span>m.schaettin@fischereiverein-romanshorn.ch</span>
          </a>
          <a :class="b('link')" href="tel:0786862754">
            <e-icon icon="i-phone" width="20" height="20" />
            <span>078 686 27 54</span>
          </a>
        </div>
      </div>
      <div :class="b('person-right')">
        <img src="../assets/dummy_person.jpg" alt="">
        <div :class="b('person-content')">
          <h4 :class="b('person-name')">
            Michi
          </h4>
          <!-- <a :class="b('link')"
             href="mailto:m.schaettin@fischereiverein-romanshorn.ch"
          >
            <e-icon icon="i-mail" width="20" height="20" />
            <span>m.schaettin@fischereiverein-romanshorn.ch</span>
          </a>
          <a :class="b('link')" href="tel:0786862754">
            <e-icon icon="i-phone" width="20" height="20" />
            <span>078 686 27 54</span>
          </a>-->
        </div>
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

        /**
         * @type {String} Defines the sizes for the img element.
         */
        sizes: [
          '(min-width: 1200px) 750px',
          '(min-width: 768px) 590px',
          '(min-width: 480px) 740px',
          '(min-width: 0px) 450px',
        ].join(','),
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

    methods: {
      /**
       * Gets the srcset string for the givin original image src.
       *
       * @param {String} originalSrc - The original image src.
       *
       * @returns {String}
       */
      getSrcSet(originalSrc) {
        const baseUrl = originalSrc.split('//a.storyblok.com/')[1];

        return [
          `https://img2.storyblok.com/480x0/${baseUrl} 480w`,
          `https://img2.storyblok.com/600x0/${baseUrl} 600w`,
          `https://img2.storyblok.com/750x0/${baseUrl} 750w`,
          `https://img2.storyblok.com/1200x0/${baseUrl} 1200w`,
          `https://img2.storyblok.com/1500x0/${baseUrl} 1500w`,
        ].join(',');
      }
    },
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

      img {
        max-width: 100%;
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
      @include font($font-size--22, 22px);

      /*text-align: center;*/
      color: $color-grayscale--1000;
      margin-bottom: $spacing--15;
    }

    &__person-content {
      background-color: $color-secondary--2;
      padding: $spacing--15;
      color: $color-grayscale--1000;
      min-height: 120px;
    }

    &__link {
      display: flex;
      align-items: center;
      color: $color-grayscale--1000;
      text-decoration: underline;
      hyphens: auto;

      .e-icon {
        margin-right: $spacing--10;
      }
    }

    &__link:not(:last-of-type) {
      margin-bottom: $spacing--5;
    }
  }
</style>
