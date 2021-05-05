<template>
  <div :class="b()">
    <!-- News -->
    <h1 :class="b('title')">
      Vorstand
    </h1>
    <h2 :class="b('subtitle')">
      Der Vorstand des Fischereivereins Romanshorn
    </h2>
    <c-leading-board />
  </div>
</template>

<script>

  /**
   * Renders the news overview page.
   */
  export default {
    name: 'board',
    metaInfo: {
      title: 'Vorstand',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Der Vorstand des Fischereivereins Romanshorn',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Vorstand, Verein, Mitglieder, Präsident, Kassier, Aktuar',
        }
      ]
    },
    components: {
      cLeadingBoard: () => import('../components/c-leading-board'),
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
  .board {
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
