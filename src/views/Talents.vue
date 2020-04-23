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
      <div v-html="parsedText" :class="b('content-block-left')"></div>
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
    <ul :class="b('supervisor-list')">
      <li v-for="(person, index) in supervisors"
          :key="index"
          :class="b('supervisor-item')">
        <c-person :person="person" :image-sizes="supervisorImageSizes" />
      </li>
    </ul>
  </div>
</template>

<script>
  import marked from 'marked/marked.min';
  import eIcon from '../components/e-icon';
  import cSlider from '../components/c-slider';
  import cPerson from '../components/c-person';

  export default {
    name: 'talents',
    components: {
      cPerson,
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

        /**
         * @type {String} Defines the sizes for the supervisor images.
         */
        supervisorImageSizes: [
          '(min-width: 1200px) 400px',
          '(min-width: 768px) 400px',
          '(min-width: 480px) 740px',
          '(min-width: 0px) 450px',
        ].join(','),
      };
    },

    computed: {
      /**
       * Gets the list of all link groups.
       *
       * @returns {Array.<Object>}
       */
      supervisors() {
        const { getTalentSupervisors } = this.$store.getters;

        return Array.isArray(getTalentSupervisors) ? getTalentSupervisors : [];
      },

      /**
       * Gets the parsed content text.
       *
       * @returns {String}
       */
      parsedText() {
        const { getTexts } = this.$store.getters;
        const introText = getTexts.find(item => item.slug === 'talents');

        return introText ? marked(introText.text, { sanitize: true }) : '';
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.supervisors.length) {
        this.$store.dispatch('fetchTalentSupervisors', { vm: this });
      }
    },
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

    &__supervisor-list {
      @extend %list-reset;

      display: flex;
      flex-wrap: wrap;
      max-width: 900px;
      margin: 0 auto;
    }

    &__supervisor-item {
      flex: 1 0 100%;
      max-width: 100%;
      padding: $spacing--25;

      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
      }
    }

    .c-person {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
