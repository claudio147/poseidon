<template>
  <div :class="b()">
    <div :class="b('content')">
      <div :class="b('inner')">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-default',
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
  .l-default {
    padding-top: 75px; // Header height
    min-height: calc(100vh - 60px); // 100vh - footer height

    @include media(sm) {
      padding-top: 90px; // Header height
      min-height: calc(100vh - 60px); // 100vh - footer height
    }

    &__content {
      @include media(lg) {
        display: flex;
        justify-content: center;
      }
    }

    &__inner {
      padding: 0 $spacing--15;

      @include media($contentWidth) {
        flex: 1 0 $contentWidth;
        max-width: $contentWidth;
      }
    }
  }
</style>
