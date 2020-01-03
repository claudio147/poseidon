<template>
  <div :class="b()">
    <h1>Verein</h1>
  </div>
</template>

<script>
  export default {
    name: 'organisation',
    metaInfo: {
      title: 'Verein',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Der Fischerverein ist....',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Sportfischer, Verein, Romanshorn, Fischer, Fisch, Sportverrein, Club',
        }
      ]
    }
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
  .organisation {
  }
</style>
