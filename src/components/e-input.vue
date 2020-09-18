<template>
  <label :class="b()">
    <span :class="b('label', { invisible: invisibleLabel, placeholder: !focus && !value })">{{ label }}</span>
    <input v-bind="$attrs"
           :class="b('input')"
           @focus="focus = true"
           @blur="focus = false"
           @input="$emit('input', $event.target.value)">
    <span :class="b('border')"></span>
  </label>
</template>

<script>
  export default {
    name: 'e-input',
    // components: {},
    // mixins: [],
    inheritAttrs: false,

    model: {
      /**
       * Changes v-model behavior and use 'checked' instead of 'value' as prop.
       * Avoids conflict with default value attribute.
       */
      prop: 'value',
      event: 'input',
    },

    props: {
      /**
       * Value passed by v-model
       */
      value: {
        default: null,
        type: [String, Number],
      },
      invisibleLabel: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        focus: false,
      };
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
    // render() {},
  };
</script>

<style lang="scss">
  .e-input {
    $this: &;

    @include font($font-size--16, null, $font-weight--regular);

    font-family: $font-family--secondary;
    display: block;
    margin: 0;
    position: relative;

    &__label {
      display: block;
      margin-bottom: 2px;
      position: absolute;
      bottom: 25px;
      transition: 400ms;
    }

    &__label--invisible {
      position: absolute;
      overflow: hidden;
      height: 0;
      width: 0;
      top: 0;
    }

    &__label--placeholder {
      bottom: 0;
      color: $color-grayscale--400;
      cursor: text;
    }

    &__input {
      width: 100%;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid $color-grayscale--400;
      margin-top: $spacing--20;
    }

    &__input:focus {
      outline: none;

      + #{$this}__border {
        width: 100%;
      }
    }

    &__border {
      position: absolute;
      bottom: -1px;
      height: 2px;
      width: 0;
      left: 0;
      background-color: $color-primary--1;
      transition: 400ms;
    }
  }
</style>
