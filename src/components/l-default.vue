<template>
  <div :class="b()">
    <c-main-header />
    <div :class="b('content')">
      <slot></slot>
    </div>
    <c-main-footer />
  </div>
</template>

<script>
  import cMainHeader from './c-main-header';
  import cMainFooter from './c-main-footer';

  export default {
    name: 'l-default',
    components: {
      cMainHeader,
      cMainFooter,
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
  .l-default {
    &__content {
      background-color: greenyellow;
    }
  }
</style>
