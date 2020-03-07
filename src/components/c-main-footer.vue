<template>
  <div :class="b()">
    Copyright {{ currentYear }} - Fischereiverein Romanshorn
  </div>
</template>

<script>
  export default {
    name: 'c-main-footer',
    // components: {},
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
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
  .c-main-footer {
    background-color: $color-primary--1;
    color: $color-grayscale--1000;
    text-align: center;
    padding: $spacing--15;
  }
</style>
