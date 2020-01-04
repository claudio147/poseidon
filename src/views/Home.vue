<template>
  <div class="home">
    <c-slider :slides="slides" />
    <div :class="b('content')">
      <div :class="b('content-inner')">
        <!-- Intro -->
        <h1 :class="b('intro-title')">
          Fischerverein Romanshorn
        </h1>
        <div :class="b('intro')">
          <div :class="b('intro-left')">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div :class="b('intro-right')">
            <img src="../assets/seeforelle-01.jpg" alt="Seeforelle">
          </div>
        </div>

        <!-- News -->
        <h1 :class="b('sub-title')">
          News und Termine
        </h1>
        <div>
          Add News Teaser...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cSlider from '../components/c-slider';

  export default {
    name: 'home',
    components: {
      cSlider,
    },
    data() {
      return {
        slides: [
          {
            src: 'https://www.fillmurray.com/g/1920/500',
            alt: 'dummy image',
          },
          {
            src: 'https://www.fillmurray.com/g/1920/500',
            alt: 'dummy image',
          },
          {
            src: 'https://www.fillmurray.com/g/1920/500',
            alt: 'dummy image',
          }
        ],
      };
    },
  };
</script>

<style lang="scss">
  .home {
    &__content {
      @include media(lg) {
        display: flex;
        justify-content: center;
      }
    }

    &__content-inner {
      padding: 0 $spacing--15;

      @include media(lg) {
        flex: 1 0 $contentWidth;
        max-width: $contentWidth;
      }
    }

    &__intro {
      font-family: $font-family--secondary;
      margin-top: $spacing--30;
      font-size: $font-size--24;
      margin-bottom: $spacing--50;

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
      font-family: $font-family--primary;
      font-size: $font-size--32;
      margin-top: $spacing--50;
    }

    &__sub-title {
      font-size: $font-size--24;
    }
  }
</style>
