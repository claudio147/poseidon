<template>
  <ul :class="b()">
    <li v-for="document in documents" :key="document.id" :class="b('list-item')">
      <a :class="b('link')"
         :href="document.src"
         title="Datei herunterladen"
         target="_blank">
        {{ document.name }}
        <e-icon icon="i-download"
                width="20"
                height="20"
                inline />
      </a>
    </li>
  </ul>
</template>

<script>
  import eIcon from './e-icon';

  /**
   * Renders a list of download files.
   */
  export default {
    name: 'c-document-list',
    components: {
      eIcon,
    },
    // mixins: [],

    props: {
      /**
       * The list of documents.
       */
      documents: {
        type: Array,
        required: true,
      },
    },
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
  .c-document-list {
    @extend %list-reset;

    &__list-item {
      margin-bottom: $spacing--15;
      padding-bottom: $spacing--15;
      border-bottom: 1px solid $color-grayscale--500;
    }

    &__link {
      display: flex;
      justify-content: space-between;
      color: $color-grayscale--200;

      .e-icon {
        display: flex;
        align-items: center;
      }
    }

    &__link:hover {
      color: $color-primary--2;

      svg,
      path,
      polyline,
      line {
        stroke: $color-primary--2;
      }
    }

    &__icon {
      width: 20px;
    }
  }
</style>
