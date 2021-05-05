<template>
  <div :class="b()">
    <!-- News -->
    <h1 :class="b('title')">
      Links
    </h1>
    <h2 :class="b('subtitle')">
      Links zu Websites unserer Partner.
    </h2>
    <c-link-list />
  </div>
</template>

<script>

  /**
   * Renders the news overview page.
   */
  export default {
    name: 'links',
    metaInfo: {
      title: 'Links',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Links zu Websites unserer Partner.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Links, Partner, Partnervereine, Fischereiverein, Fischereiverein',
        }
      ]
    },
    components: {
      cLinkList: () => import('../components/c-link-list'),
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
  .links {
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
