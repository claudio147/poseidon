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
    padding-top: $spacing--80;
    padding-bottom: $spacing--80;

    &__title {
      @extend %heading-h1;

      margin-bottom: $spacing--20;
      text-align: center;
    }

    &__subtitle {
      @extend %heading-h2;

      margin-bottom: $spacing--80;
      text-align: center;
    }
  }
</style>
