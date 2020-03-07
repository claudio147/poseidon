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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
          eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetet
          ur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ma
          gna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum d
          olor sit amet....
        </p>
      </div>
      <div :class="b('intro-right')">
        <img src="../assets/photo-of-person-holding-fishing-rod-2473502.jpg" alt="Seeforelle">
      </div>
    </div>

    <!-- News -->
    <h2 :class="b('sub-title')">
      News und Termine
    </h2>
    <div>
      <c-news-list :max-items="3" />
    </div>
  </div>
</template>

<script>
  import cSlider from '../components/c-slider';
  import cNewsList from '../components/c-news-list';

  export default {
    name: 'home',
    components: {
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
      margin-top: $spacing--50;
      font-size: $font-size--24;
      margin-bottom: $spacing--100;

      @include media(sm) {
        display: flex;
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

      text-align: center;
      margin-top: $spacing--80;
    }

    &__sub-title {
      @extend %heading-h1;

      text-align: center;
      margin-bottom: $spacing--50;
    }
  }
</style>
