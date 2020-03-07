<template>
  <div :class="b()">
    <h1 :class="b('title')">
      Jungfischer Agenda
    </h1>
    <h2 :class="b('sub-title')">
      Eine Übersicht aller Termine und Kurse welche für unsere Jungfischer wichtig sind.
    </h2>
    <a :class="b('link')" href="http://www.anglerausbildung.ch/sana-kurse/">
      >>Hier gehts zu den aktuellen Kursangeboten
    </a>
  </div>
</template>

<script>
  export default {
    name: 'talent-schedule',
    // components: {},
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

    &__link {
      color: $color-grayscale--200;
      border-bottom: 1px solid $color-grayscale--200;

      &:hover {
        color: $color-secondary--2;
      }
    }
  }
</style>
