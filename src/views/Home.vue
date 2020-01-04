<template>
  <div class="home">
    <c-slider :slides="slides" />
    Home
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
