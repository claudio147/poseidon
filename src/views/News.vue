<template>
  <div :class="b()">
    <h1>News</h1>
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
  }
</style>
