<template>
  <div class="home">
    <c-slider :slides="slides" />
    <!-- Intro -->
    <h1 :class="b('intro-title')">
      Fischerverein Romanshorn
    </h1>
    <div :class="b('intro')">
      <div v-html="parsedIntroText" :class="b('intro-left')"></div>
      <div :class="b('intro-right')">
        <img src="https://a.storyblok.com/f/73482/1500x1000/7f4bfc2245/hafen_romanshorn_4_3.jpg"
             :sizes="sizes"
             :srcset="getSrcSet('https://a.storyblok.com/f/73482/1500x1000/7f4bfc2245/hafen_romanshorn_4_3.jpg')"
             alt="Hafen Romanshorn">
      </div>
    </div>

    <!-- Termine -->
    <h2 :class="b('sub-title')">
      Unsere nächsten Termine
    </h2>
    <div :class="b('event-list-block')">
      <c-event-list :max-items="2" :show-past-events="false" :show-title="false" />
    </div>

    <!-- Call to Action / Disturber -->
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

    <!-- News -->
    <h2 :class="b('sub-title')">
      News und Aktuelles
    </h2>
    <div>
      <c-news-list :max-items="3" />
    </div>
  </div>
</template>

<script>
  import marked from 'marked/marked.min.js';
  import eIcon from '../components/e-icon';
  import cSlider from '../components/c-slider';
  import cNewsList from '../components/c-news-list';
  import CEventList from '../components/c-event-list';

  export default {
    name: 'home',
    components: {
      CEventList,
      eIcon,
      cSlider,
      cNewsList,
    },

    metaInfo: {
      title: 'Startseite',
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
          content: 'Fischereiverein, Romanshorn, Geschichte, Fischereiverein, Fischer, Sport, '
            + 'Verein, Hobby, Spass, Bodensee',
        }
      ]
    },

    data() {
      return {
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/97363ed403/hafen_romanshorn_2.jpg',
            alt: 'dummy image',
          },
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/196362e122/hafen_romanshorn_6.jpg',
            alt: 'dummy image',
          },
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/69226e1420/hafen_romanshorn_3.jpg',
            alt: 'dummy image',
          },
        ],

        /**
         * @type {String} Defines the sizes for the img element.
         */
        sizes: [
          '(min-width: 1200px) 690px',
          '(min-width: 768px) 570px',
          '(min-width: 0px) 740px',
        ].join(','),
      };
    },

    computed: {
      /**
       * Gets the parsed content text.
       *
       * @returns {String}
       */
      parsedIntroText() {
        const { getTexts } = this.$store.getters;
        const introText = getTexts.find(item => item.slug === 'homepage-intro');

        return introText ? marked(introText.text, { sanitize: true }) : '';
      },
    },

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
          `https://img2.storyblok.com/600x0/${baseUrl} 600w`,
          `https://img2.storyblok.com/920x0/${baseUrl} 920w`,
          `https://img2.storyblok.com/1200x0/${baseUrl} 1200w`,
          `https://img2.storyblok.com/1500x0/${baseUrl} 1500w`,
        ].join(',');
      },
    },
  };
</script>

<style lang="scss">
  .home {
    &__intro {
      font-family: $font-family--secondary;
      margin-top: $spacing--30;
      font-size: $font-size--18;
      margin-bottom: $spacing--50;

      @include media(sm) {
        display: flex;
        font-size: $font-size--24;
        margin-top: $spacing--50;
        margin-bottom: $spacing--100;
      }
    }

    &__intro-left {
      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding-right: $spacing--20;
      }

      p {
        margin-bottom: $spacing--10;
      }
    }

    &__intro-right {
      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding-left: $spacing--20;
      }

      img {
        max-width: 100%;
      }
    }

    &__intro-title {
      @extend %heading-h1;

      margin-top: $spacing--30;
      margin-bottom: 0;
      text-align: center;

      @include media(sm) {
        margin-top: $spacing--80;
      }
    }

    &__sub-title {
      @extend %heading-h1;

      text-align: center;
      margin-bottom: $spacing--30;

      @include media(sm) {
        margin-bottom: $spacing--50;
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

    &__event-list-block {
      margin-bottom: $spacing--80;
    }
  }
</style>
