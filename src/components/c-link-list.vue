<template>
  <div :class="b()">
    <ul :class="b('group-list')">
      <li v-for="group in linkGroups" :key="group.id" :class="b('group-item')">
        <h3 :class="b('group-title')">{{ group.title }}</h3>
        <ul :class="b('link-list')">
          <li v-for="link in group.links" :key="link.url" :class="b('link-item')">
            <a :href="link.url" :class="b('link')" target="_blank">
              <span :class="b('image-block')">
                <img v-if="link.image" :src="link.image" :alt="link.title">
                <img v-else src="../assets/logo_200x160.png" alt="Placeholder">
              </span>
              <span :class="b('link-url')">{{ link.url }}</span>
              <span :class="b('link-text')">{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

  /**
   * Renders a list of links with images.
   */
  export default {
    name: 'c-link-list',
    // components: {},
    // mixins: [],

    // props: {},
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the list of all link groups.
       *
       * @returns {Array.<Object>}
       */
      linkGroups() {
        return this.$store.getters.links || [];
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.linkGroups.length) {
        this.$store.dispatch('fetchLinks', { vm: this });
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
  .c-link-list {
    $this: &;

    &__group-list {
      @extend %list-reset;
    }

    &__group-item {
      display: block;
      margin-bottom: $spacing--80;
    }

    &__group-title {
      @extend %heading-h2;

      text-transform: uppercase;
    }

    &__link-list {
      @extend %list-reset;

      display: flex;
      flex-wrap: wrap;
    }

    &__link-item {
      flex: 1 0 100%;
      max-width: 100%;
      padding: $spacing--20;

      @include media(sm) {
        flex: 1 0 250px;
        max-width: 250px;
      }
    }

    &__link {
      color: $color-primary--1;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__link:hover {
      #{$this}__link-text {
        color: $color-primary--1;
      }
    }

    &__image-block {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: $spacing--15;

      @include media(sm) {
        justify-content: center;
        height: 200px;
      }
    }

    &__link-url {
      display: block;
      hyphens: auto;
    }

    &__link-text {
      display: block;
    }
  }
</style>
