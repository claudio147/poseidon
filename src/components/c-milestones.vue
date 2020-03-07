<template>
  <ul :class="b()">
    <li v-for="(milestone, index) in milestones"
        :key="`milestone-${index}`"
        :class="b('block')">
      <div :class="b('content', { left: true })">
        <div v-if="index % 2 < 1" :class="b('text')">
          {{ milestone.text }}
          <span :class="b('year')">
            {{ milestone.year }}
          </span>
        </div>
      </div>
      <div :class="b('content', { right: true })">
        <div v-if="index % 2 > 0" :class="b('text')">
          {{ milestone.text }}
          <span :class="b('year')">
            {{ milestone.year }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

  /**
   * Component shows a timeline with milestones.
   */
  export default {
    name: 'c-milestones',
    // components: {},
    // mixins: [],

    props: {
      /**
       * Holds the list of milestones.
       */
      milestones: {
        type: Array,
        default: () => [],
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
  .c-milestones {
    $this: &;

    @extend %list-reset;

    &__block {
      display: flex;
    }

    &__content {
      flex: 1 0 50%;
      max-width: 50%;
      padding: $spacing--25 0;

      &--left {
        border-right: 5px solid $color-secondary--2;
        text-align: right;
      }

      &--right {
        text-align: left;

        #{$this}__year {
          left: $spacing--25;
          right: auto;
        }
      }
    }

    &__text {
      position: relative;
      border-bottom: 3px dotted $color-secondary--2;
      padding: 0 $spacing--25;
    }

    &__year {
      color: $color-secondary--2;
      font-weight: $font-weight--bold;
      position: absolute;
      bottom: -30px;
      right: $spacing--25;
    }
  }
</style>
