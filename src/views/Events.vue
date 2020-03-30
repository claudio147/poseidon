<template>
  <div :class="b()">
    <!-- Events -->
    <h1 :class="b('title')">
      Veranstaltungen
    </h1>
    <h2 :class="b('subtitle')">
      Hier erfahren Sie wann unsere nächsten Vereins- Events stattfinden.
    </h2>
    <c-event-list />
  </div>
</template>

<script>
  import cEventList from '../components/c-event-list';

  /**
   * Renders the news overview page.
   */
  export default {
    name: 'events',
    metaInfo: {
      title: 'Events',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Hier erfahren Sie wann unsere nächsten Vereins- Events stattfinden.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Events, Termine, Veranstaltungen, Sportfischerverein, Fischereiverein',
        }
      ]
    },
    components: {
      cEventList,
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
  .events {
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

      margin-bottom: $spacing--50;
      text-align: center;

      @include media(sm) {
        margin-bottom: $spacing--80;
      }
    }
  }
</style>
