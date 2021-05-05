<template>
  <ul :class="b()">
    <li v-for="document in documents" :key="document.id" :class="b('list-item')">
      <a :class="b('link')"
         :href="document.src"
         title="Datei herunterladen"
         target="_blank">
        {{ document.name }}
        <span :class="b('file-type')">
          {{ getFileType(document.src) }}
          <e-icon icon="i-download"
                  width="20"
                  height="20"
                  inline />
        </span>
      </a>
    </li>
  </ul>
</template>

<script>

  /**
   * Renders a list of download files.
   */
  export default {
    name: 'c-document-list',
    components: {
      eIcon: () => import('../components/e-icon'),
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

    methods: {
      getFileType(src) {
        const splittedSrc = src.split('.');

        return splittedSrc[splittedSrc.length - 1].toUpperCase();
      }
    },
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
      color: $color-primary--1;

      svg,
      path,
      polyline,
      line {
        stroke: $color-primary--1;
      }
    }

    &__icon {
      width: 20px;
    }

    &__file-type {
      display: flex;
      align-items: center;
      font-size: $font-size--14;

      .e-icon {
        margin-left: $spacing--15;
      }
    }
  }
</style>
