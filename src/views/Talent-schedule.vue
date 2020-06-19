<template>
  <div :class="b()">
    <h1 :class="b('title')">
      Jungfischer Agenda
    </h1>
    <h2 :class="b('sub-title')">
      Eine Übersicht aller Termine und Kurse welche für unsere Jungfischer wichtig sind.
    </h2>
    <div v-html="contentText" :class="b('content')"></div>
  </div>
</template>

<script>
  import marked from 'marked/marked.min';

  export default {
    name: 'talent-schedule',
    metaInfo: {
      title: 'Jungfischer Agenda',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Eine Übersicht aller Termine und Kurse welche für unsere Jungfischer wichtig sind.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Jungfischer, Agenda, Termine, Events, Fischer, Fisch, Sportverrein, Club',
        }
      ]
    },
    // components: {},
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the list of all link groups.
       *
       * @returns {Array.<Object>}
       */
      contentText() {
        const { getTexts } = this.$store.getters;
        const text = getTexts.find(item => item.slug === 'talents-schedule');

        return text ? marked(text.text, { sanitize: true }) : '';
      },
    },
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
  .talent-schedule {
    &__title {
      @extend %heading-h1;

      text-align: center;
      margin-top: $spacing--50;
    }

    &__sub-title {
      @extend %heading-h2;

      text-align: center;
      margin-bottom: $spacing--50;
    }

    &__content {
      @extend %cms;
    }
  }
</style>
