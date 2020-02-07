<template>
  <div :class="b()">
    <h1>Contact</h1>
    <c-contact-form />
  </div>
</template>

<script>
  import cContactForm from '../components/c-contact-form';

  export default {
    name: 'contact',
    components: {
      cContactForm,
    },
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
  .contact {
  }
</style>
