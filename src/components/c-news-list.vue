<template>
  <ul :class="b()">
    <li v-for="item in test" :key="item.id" :class="b('item')">
      <c-news-teaser :news="item" />
    </li>
  </ul>
</template>

<script>
  import cNewsTeaser from './c-news-teaser';

  export default {
    name: 'c-news-list',
    components: {
      cNewsTeaser,
    },
    // mixins: [],

    // props: {},
    data() {
      return {
        test: [
          {
            id: 'abc',
            title: 'Fischessen verschoben auf 24. Feb 2020',
            image: {
              src: 'https://recipecontent.fooby.ch/10748_3-2_1560-1040.jpg',
              alt: 'Fischessen',
            },
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            date: '01.01.2020',
          },
          {
            id: '123',
            title: 'Aalfischen 25. Januar 2020',
            image: {
              src: 'https://recipecontent.fooby.ch/10748_3-2_1560-1040.jpg',
              alt: 'Fischessen',
            },
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            date: '15.01.2020',
          },
          {
            id: '123',
            title: 'Aalfischen 25. Januar 2020',
            image: {
              src: 'https://recipecontent.fooby.ch/10748_3-2_1560-1040.jpg',
              alt: 'Fischessen',
            },
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            date: '15.01.2020',
          },
          {
            id: '123',
            title: 'Aalfischen 25. Januar 2020',
            image: {
              src: 'https://recipecontent.fooby.ch/10748_3-2_1560-1040.jpg',
              alt: 'Fischessen',
            },
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            date: '15.01.2020',
          },
          {
            id: '123',
            title: 'Aalfischen 25. Januar 2020',
            image: {
              src: 'https://recipecontent.fooby.ch/10748_3-2_1560-1040.jpg',
              alt: 'Fischessen',
            },
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            date: '15.01.2020',
          },
        ]
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
  .c-news-list {
    @extend %list-reset;

    @include media(sm) {
      display: flex;
      flex-wrap: wrap;
      margin: (-$spacing--40) (-$spacing--30);
    }

    &__item {
      margin-bottom: $spacing--40;

      @include media(sm) {
        flex: 1 0 50%;
        max-width: 50%;
        padding: $spacing--40 $spacing--30;
      }

      .c-news-teaser {
        height: 100%;
      }
    }
  }
</style>
