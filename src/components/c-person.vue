<template>
  <div :class="b()">
    <img v-if="person.image"
         :src="person.image"
         :srcset="getSrcSet(person.image)"
         :sizes="imageSizes"
         :alt="person.name"
         :class="b('image')">
    <img v-else
         :class="b('image')"
         src="../assets/dummy_person.jpg"
         alt="dummy member image">
    <div :class="b('content')">
      <span :class="b('name')">{{ person.name }}</span>
      <span :class="b('function')">{{ person.function }}</span>
      <div v-if="person.email || person.phone" :class="b('optional-content')">
        <a v-if="person.email"
           :class="b('link')"
           href=""
           @click.prevent="onOpenEmail(person.email)"
        >
          <e-icon icon="i-mail" width="20" height="20" />
          <span>{{ person.email }}</span>
        </a>
        <a v-if="person.phone" :class="b('link')" :href="`tel:${person.phone}`">
          <e-icon icon="i-phone" width="20" height="20" />
          <span>{{ person.phone }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

  /**
   * Component renders a person.
   */
  export default {
    name: 'c-person',
    components: {
      eIcon: () => import('../components/e-icon'),
    },
    // mixins: [],

    props: {
      /**
       * A person object from storyblok.
       */
      person: {
        type: Object,
        default: null,
        required: true,
      },

      /**
       * Gets the needed image sizes.
       */
      imageSizes: {
        type: String,
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
      /**
       * Opens the email dialog.
       *
       * @param {String} email - The E-mail address.
       */
      onOpenEmail(email) {
        window.location.href = `mailto:${email}`;
      },

      /**
       * Gets the srcset string for the given original image src.
       *
       * @param {String} originalSrc - The original image src.
       *
       * @returns {String}
       */
      getSrcSet(originalSrc) {
        const baseUrl = originalSrc.split('//a.storyblok.com/')[1];

        return [
          `https://img2.storyblok.com/320x426/smart/${baseUrl} 320w`,
          `https://img2.storyblok.com/480x640/smart/${baseUrl} 480w`,
          `https://img2.storyblok.com/960x1280/smart/${baseUrl} 960w`,
          `https://img2.storyblok.com/1500x2000/smart/${baseUrl} 1500w`,
        ].join(',');
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-person {
    &__image {
      max-width: 100%;
    }

    &__content {
      padding: $spacing--20;
      background-color: $color-secondary--2;
      color: $color-grayscale--1000;
      flex: 1 0 auto;
    }

    &__name {
      @include font($font-size--22, 22px);

      display: block;
      margin-bottom: $spacing--5;
    }

    &__function {
      @include font($font-size--18, 18px);

      display: block;
    }

    &__optional-content {
      margin-top: $spacing--20;
    }

    &__link {
      display: flex;
      align-items: center;
      color: $color-grayscale--1000;
      text-decoration: underline;
      hyphens: auto;

      .e-icon {
        margin-right: $spacing--10;
      }
    }

    &__link:not(:last-of-type) {
      margin-bottom: $spacing--5;
    }
  }
</style>
