<template>
  <div :class="b()">
    <h1>History</h1>
  </div>
</template>

<script>
  export default {
    name: 'history',
    metaInfo: {
      title: 'Geschichte',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Die Geschichte des Sportfischervereins beginnt...',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Sportfischerverin, Romanshorn, Geschichte, Fischerverein',
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
  .history {
  }
</style>
