<template>
  <div class="home">
    <c-slider :slides="slides" />
    <!-- Intro -->
    <h1 :class="b('intro-title')">
      Fischerverein Romanshorn
    </h1>
    <div :class="b('intro')">
      <div :class="b('intro-left')">
        <p>
          Der Fischerverein Romanshorn hat in den letzten 66 Jahren diverse Höhen und Tiefen erlebt. Heute präsentiert sich der Verein in bester Verfassung,was sich erfreulicherweise auch in den Mitgliederzahlen bemerkbar macht.
          Aktuell erfreuen wir uns über mehr als 50 Aktivmitglieder.
        </p>
        <p>Seit einem Jahr führen wir eine Jungfischergruppe mit 10 Jungfischer.</p>
        <p>Gemeinsam treffen wir uns im Jahr an 10 bis 12 Anlässen.</p>
        <p>Der Höhepunkt des Jahres ist das Fischessen das an einem Wochenende im August stattfindet.</p>
        <p>Herzlich willkommen im Fischerverein Romanshorn!</p>
        <p><b>Petri Heil!</b></p>
      </div>
      <div :class="b('intro-right')">
        <img src="../assets/photo-of-person-holding-fishing-rod-2473502.jpg" alt="Seeforelle">
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
        <router-link to="/registration" :class="b('cta-button')">
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
    data() {
      return {
        slides: [
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/20da0b2e38/slider_02.jpg',
            alt: 'dummy image',
          },
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/f94becd08f/slider_01.jpg',
            alt: 'dummy image',
          },
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/65499c7327/slider_03.jpg',
            alt: 'dummy image',
          },
          {
            src: 'https://a.storyblok.com/f/73482/2400x800/0735ba50cd/slider_04.jpg',
            alt: 'dummy image',
          },
        ],
      };
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
