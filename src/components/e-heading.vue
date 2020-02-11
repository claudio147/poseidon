<!-- This component has no <template> because of dynamic root element -->

<script>
  const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  export default {
    name: 'e-heading',
    // components: {},
    // mixins: [],

    props: {
      /**
       * Defines the tagname of the heading (h1-h6)
       *
       * Valid values: `h1, h2, h3, h4, h5, h6`
       */
      tagName: {
        type: String,
        required: true,
        validator(value) {
          return headers.includes(value);
        },
      },

      /**
       * Forces the use of an alternative font style.
       *
       * e.g. you can visually display a h4 as h2
       */
      fontStyle: {
        type: String,
        default: null,
        validator(value) {
          return headers.includes(value);
        },
      },

      /**
       * Defines if the heading should have an underline.
       */
      underline: {
        type: Boolean,
        default: false,
      },

      /**
       * Defines the font-weight
       *
       * Valid values: `normal, semibold, bold`.
       */
      fontWeight: {
        type: String,
        required: false,
        default: null,
        validator(value) {
          return [
            'normal',
            'semibold',
            'bold',
          ].includes(value);
        },
      },

      /**
       * Defines spacing for the heading element.
       *
       * Valid values: `500, 700, 800`
       */
      spacing: {
        type: [Number, String],
        default: 500,
        validator(value) {
          return [
            200,
            400,
            500,
            700,
            800,
          ].includes(parseInt(value, 10));
        },
      },

      /**
       * Defines if the heading shall be uppercase.
       */
      uppercase: {
        type: Boolean,
        default: false,
      },
    },

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

    /**
     * Creates a heading element.
     *
     * @param   {Function}    createElement   Vue helper
     *
     * @returns {*}
     */
    render(createElement) {
      const element = this.tagName;
      const attributes = {
        class: this.b({
          underline: this.underline,
          uppercase: this.uppercase,
          fontWeight: this.fontWeight,
          spacing: this.spacing,
          [this.fontStyle || element]: true
        }),
        attrs: {
          ...this.$attrs,
        },
      };

      const childAttributes = {
        class: this.b('inner', { spacing: this.$props.spacing }),
      };

      return createElement(
        element,
        attributes,
        [
          createElement('span', childAttributes, this.$slots.default)
        ],
      );
    },
  };
</script>

<style lang="scss">
  .e-heading {
    @include font($font-size--18, 22px, $font-weight--regular);

    color: $color-primary--1;
    text-decoration: none;
    display: block;

    &__inner {
      display: inline-block;
      max-width: 100%; // Fixes a width issue in IE11 when header is placed inside a flex element.
    }

    &__inner a {
      color: $color-secondary--1;
      text-decoration: none;
    }

    &--underline &__inner {
      border-bottom: 1px solid $color-primary--1;

      @include media(sm) {
        padding: $spacing--15 $spacing--20;
      }
    }

    &--underline &__inner--spacing-200 {
      padding: $spacing--10;
    }

    &--underline &__inner--spacing-400 {
      padding: $spacing--10 $spacing--20;
    }

    &--underline &__inner--spacing-500 {
      padding: $spacing--15 $spacing--10;
    }

    &--underline &__inner--spacing-700 {
      padding: $spacing--20 $spacing--20 $spacing--5;
    }

    &--underline &__inner--spacing-800 {
      padding: $spacing--20 $spacing--25 $spacing--5;
    }

    &--uppercase {
      text-transform: uppercase;
    }

    &--h1 {
      @include font($font-size--32);

      font-weight: $font-weight--bold;
      margin-bottom: $spacing--25;
    }

    &--h2 {
      @include font($font-size--16);
    }

    &--h3 {
      @include font($font-size--14);
    }

    &--h4 {
      @include font($font-size--14);

      font-weight: $font-weight--bold;
    }

    &--h5 {
      @include font($font-size--14);

      font-weight: $font-weight--semi-bold;
    }

    &--h6 {
      @include font($font-size--14);
    }

    &--font-weight-normal {
      font-weight: $font-weight--regular;
    }

    &--font-weight-semibold {
      font-weight: $font-weight--semi-bold;
    }

    &--font-weight-bold {
      font-weight: $font-weight--bold;
    }
  }
</style>
