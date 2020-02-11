<template>
  <div :class="b()">
    <e-heading tag-name="h1">
      Dokumente
    </e-heading>
    <p :class="b('intro-text')">
      Hier finden Sie alle wichtigen Vereinsdokumente und allgemeine Informationen zum Download.
    </p>
    <c-document-list v-if="documents.length" :documents="documents" />
  </div>
</template>

<script>
  import cDocumentList from '../components/c-document-list';
  import eHeading from '../components/e-heading';

  /**
   * View for the document downloads.
   */
  export default {
    name: 'documents',
    metaInfo() {
      return {
        title: 'Dokumente',
        meta: [
          {
            vmid: 'description',
            name: 'description',
            content: 'Alle Downloads rund um den Verein und die Fischerei.',
          },
          {
            vmid: 'keywords',
            name: 'keywords',
            content: this.documents.map(document => document.name).join(', '),
          }
        ]
      };
    },
    components: {
      cDocumentList,
      eHeading,
    },
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the list of all news.
       *
       * @returns {Array.<Object>}
       */
      documents() {
        return this.$store.getters.downloads || [];
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.documents.length) {
        this.$store.dispatch('fetchDownloads', { vm: this });
      }
    },
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
  .documents {
    padding-top: $spacing--50;

    &__intro-text {
      margin-bottom: $spacing--50;
    }
  }
</style>
