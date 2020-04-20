<template>
  <ul :class="b()">
    <li v-for="member in members"
        :key="member.id"
        :class="b('item')">
      <c-person :person="member" :image-sizes="sizes" />
    </li>
  </ul>
</template>

<script>
  import cPerson from './c-person';

  /**
   * Leading board liste.
   */
  export default {
    name: 'c-leading-board',
    components: {
      cPerson,
    },
    // mixins: [],

    // props: {},
    data() {
      return {
        /**
         * @type {String} Defines the sizes for the img element.
         */
        sizes: [
          '(min-width: 1024px) 320px',
          '(min-width: 0px) 480px',
        ].join(','),
      };
    },
    computed: {
      /**
       * Gets the list of all link groups.
       *
       * @returns {Array.<Object>}
       */
      members() {
        const { getLeadingBoardMembers } = this.$store.getters;

        return Array.isArray(getLeadingBoardMembers) ? getLeadingBoardMembers : [];
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.members.length) {
        this.$store.dispatch('fetchMembers', { vm: this });
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
  .c-leading-board {
    @extend %list-reset;

    @include media(xs) {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      display: flex;
      flex-direction: column;
      margin-bottom: $spacing--20;

      @include media(xs) {
        flex: 1 0 50%;
        max-width: 50%;
        padding: 0 $spacing--20;
        margin-bottom: $spacing--30;
      }

      @include media(md) {
        flex-basis: percentage(1/3);
        max-width: percentage(1/3);
        margin-bottom: $spacing--80;
      }

      @include media(lg) {
        flex-basis: percentage(1/4);
        max-width: percentage(1/4);
      }
    }

    .c-person {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

  }
</style>
