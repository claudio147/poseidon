<template>
  <div :class="b()">
    <!-- News -->
    <h1 :class="b('title')">
      News
    </h1>
    <h2 :class="b('subtitle')">
      Erfahren Sie hier aktuelles rund um den Verein
    </h2>
    <c-news-list />
  </div>
</template>

<script>
  import cNewsList from '../components/c-news-list';

  /**
   * Renders the news overview page.
   */
  export default {
    name: 'news',
    metaInfo: {
      title: 'News',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Neuigkeiten und News über den Sportfischerverein Romanshorn',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'News, Aktuelles, Sportfischerverein, Fischereiverein',
        }
      ]
    },
    components: {
      cNewsList,
    },
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

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
  .news {
    padding-top: $spacing--30;
    padding-bottom: $spacing--50;

    @include media(sm) {
      padding-top: $spacing--80;
    }

    &__title {
      @extend %heading-h1;

      margin-bottom: $spacing--20;
      text-align: center;
    }

    &__subtitle {
      @extend %heading-h2;

      margin-bottom: $spacing--30;
      text-align: center;

      @include media(sm) {
        margin-bottom: $spacing--80;
      }
    }
  }
</style>
