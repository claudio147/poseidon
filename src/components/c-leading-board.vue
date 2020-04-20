<template>
  <ul :class="b()">
    <li v-for="member in members"
        :key="member.id"
        :class="b('item')">
      <img v-if="member.image"
           :src="member.image"
           :srcset="getSrcSet(member.image)"
           :sizes="sizes"
           :alt="member.name"
           :class="b('image')">
      <img v-else
           :class="b('image')"
           src="../assets/dummy_person.jpg"
           alt="dummy member image">
      <div :class="b('content')">
        <span :class="b('name')">{{ member.name }}</span>
        <span :class="b('function')">{{ member.function }}</span>
        <div v-if="member.email || member.phone" :class="b('optional-content')">
          <a v-if="member.email"
             :class="b('link')"
             href=""
             @click.prevent="onOpenEmail(member.email)"
          >
            <e-icon icon="i-mail" width="20" height="20" />
            <span>{{ member.email }}</span>
          </a>
          <a v-if="member.phone" :class="b('link')" :href="`tel:${member.phone}`">
            <e-icon icon="i-phone" width="20" height="20" />
            <span>{{ member.phone }}</span>
          </a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import eIcon from './e-icon';

  export default {
    name: 'c-leading-board',
    components: {
      eIcon,
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
          `https://img2.storyblok.com/480x640/smart/${baseUrl} 480w`,
          `https://img2.storyblok.com/320x426/smart/${baseUrl} 320w`,
          `https://img2.storyblok.com/960x1280/smart/${baseUrl} 960w`,
        ].join(',');
      }
    },
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
