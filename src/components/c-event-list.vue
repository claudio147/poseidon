<template>
  <div :class="b()">
    <template v-if="showNextEvents && nextEvents.length">
      <!-- Active events -->
      <h2 v-if="showTitle" :class="b('group-title')">
        Anstehende Veranstaltungen
      </h2>
      <ul :class="b('list', { next: true })">
        <li v-for="event in nextEvents"
            :key="event.id"
            :class="b('item')">
          <div :style="{ backgroundImage: `url('${event.image}')` }"
               :class="b('image')"></div>
          <div :class="b('content')">
            <span :class="b('date')">
              {{ $dayjs(event.date).format('DD. MMMM YYYY') }}
            </span>
            <h3 :class="b('title')">
              {{ event.title }}
            </h3>
            <p :class="b('text')">
              {{ event.text }}
            </p>
          </div>
        </li>
      </ul>
    </template>

    <!-- Old events -->
    <template v-if="showPastEvents && pastEvents.length">
      <h2 v-if="showTitle" :class="b('group-title')">
        Vergangene Veranstaltungen
      </h2>
      <ul :class="b('list', { past: true })">
        <li v-for="event in pastEvents"
            :key="event.id"
            :class="b('item')">
          <div :style="{ backgroundImage: `url('${event.image}')` }"
               :class="b('image', { past: true })"></div>
          <div :class="b('content', { past: true })">
            <span :class="b('date')">
              {{ $dayjs(event.date).format('DD. MMMM YYYY') }}
            </span>
            <h3 :class="b('title')">
              {{ event.title }}
            </h3>
            <p :class="b('text')">
              {{ event.text }}
            </p>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>

  /**
   * Component renders the list of events (past and next events).
   */
  export default {
    name: 'c-event-list',
    // components: {},
    // mixins: [],

    props: {
      maxItems: {
        type: Number,
        default: -1,
      },

      showPastEvents: {
        type: Boolean,
        default: true,
      },

      showNextEvents: {
        type: Boolean,
        default: true,
      },

      showTitle: {
        type: Boolean,
        default: true,
      },
    },
    // data() {
    //   return {};
    // },

    computed: {
      /**
       * Gets the list of all events.
       *
       * @returns {Array.<Object>}
       */
      eventList() {
        return this.$store.getters.events || [];
      },

      /**
       * Gets the past event list.
       *
       * @returns {Array.<Object>}
       */
      pastEvents() {
        if (Array.isArray(this.eventList)) {
          const currentDate = new Date();

          currentDate.setDate(currentDate.getDate() - 1);

          return this.eventList
            .filter(event => new Date(event.date) < currentDate)
            .slice(0, this.maxItems > 0 ? this.maxItems : this.eventList.length - 1);
        }

        return [];
      },

      /**
       * Gets the future events.
       *
       * @returns {Array.<Object>}
       */
      nextEvents() {
        if (Array.isArray(this.eventList)) {
          const currentDate = new Date();

          currentDate.setDate(currentDate.getDate() - 1);

          return this.eventList
            .filter(event => new Date(event.date) >= currentDate)
            .slice(0, this.maxItems > 0 ? this.maxItems : this.eventList.length - 1);
        }

        return [];
      },
    },
    // watch: {},

    // beforeCreate() {},
    created() {
      if (!this.eventList.length) {
        this.$store.dispatch('fetchEvents', { vm: this });
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
  .c-event-list {
    &__group-title {
      @extend %heading-h2;

      margin-top: $spacing--100;

    }

    &__group-title:first-of-type {
      margin-top: 0;
    }

    &__list {
      @extend %list-reset;
    }

    &__list--past {
      opacity: 0.5;
    }

    &__item {
      display: flex;
      margin-bottom: $spacing--20;

      @include media(sm) {
        margin-bottom: $spacing--40;
      }
    }

    &__item:last-of-type {
      margin-bottom: 0;
    }

    &__image {
      background-position: center;
      background-size: cover;
      max-width: 80px;
      flex: 1 0 80px;

      @include media(xs) {
        max-width: 120px;
        flex-basis: 120px;
      }

      @include media(sm) {
        max-width: 200px;
        flex-basis: 200px;
      }
    }

    &__image--past {
      filter: grayscale(100%);
    }

    &__content {
      flex: 1 0 auto;
      max-width: calc(100% - 80px);
      background-color: $color-secondary--2;
      padding: $spacing--10;
      color: $color-grayscale--1000;
      min-height: 180px;

      @include media(xs) {
        max-width: calc(100% - 120px);
        padding: $spacing--15;
      }

      @include media(sm) {
        max-width: calc(100% - 200px);
        padding-left: $spacing--30;
      }
    }

    &__content--past {
      filter: grayscale(100%);;
    }

    &__date {
      @extend %heading-h2;

      font-size: $font-size--24;
      color: $color-grayscale--1000;
      font-weight: $font-weight--bold;
    }

    &__title {
      @include font($font-size--20, null, $font-weight--regular);
    }

    &__text {
      @include font($font-size--18, null, $font-weight--regular);
    }
  }
</style>
