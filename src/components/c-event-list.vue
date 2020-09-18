<template>
  <div :class="b()">
    <template v-if="showNextEvents">
      <!-- Active events -->
      <h2 v-if="showTitle" :class="b('group-title')">
        Anstehende Veranstaltungen:
      </h2>
      <ul v-if="nextEvents.length" :class="b('list', { next: true })">
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
            <div v-html="marked(event.text, { sanitize: true })" :class="b('text')"></div>
            <button :class="b('download-button')"
                    title="Termin in Kalender speichern"
                    @click="download(event)">
              <e-icon icon="i-calendar" width="30" height="30" />
            </button>
          </div>
        </li>
      </ul>
      <div v-else :class="b('no-results-text')">
        Zurzeit stehen keine Termine an.
      </div>
    </template>

    <!-- Old events -->
    <template v-if="showPastEvents && pastEvents.length">
      <h2 v-if="showTitle" :class="b('group-title')">
        Vergangene Veranstaltungen:
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
  import marked from 'marked/marked.min.js';
  import eIcon from './e-icon';

  /**
   * Component renders the list of events (past and next events).
   */
  export default {
    name: 'c-event-list',
    components: {
      eIcon
    },
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
        const { eventList, maxItems } = this;

        if (Array.isArray(eventList)) {
          const currentDate = new Date();

          currentDate.setDate(currentDate.getDate() - 1);

          return eventList
            .filter(event => new Date(event.date) < currentDate)
            .slice(0, maxItems > 0 ? maxItems : eventList.length - 1)
            .reverse();
        }

        return [];
      },

      /**
       * Gets the future events.
       *
       * @returns {Array.<Object>}
       */
      nextEvents() {
        const { eventList, maxItems } = this;

        if (Array.isArray(eventList)) {
          const currentDate = new Date();

          currentDate.setDate(currentDate.getDate() - 1);

          return eventList
            .filter(event => new Date(event.date) >= currentDate)
            .slice(0, maxItems > 0 ? maxItems : eventList.length);
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

    methods: {
      marked,

      /**
       * Downloads the given event as a .ics file for the local calendar.
       *
       * @param {Object} event - The event (storyblok) object.
       */
      download(event) {
        const { date, title, text } = event;

        this.$ics.addEvent('ch-de', title, text.replace(/\n/g, ''), '', date, date);

        const calendar = this.$ics.calendar();
        const blob = new Blob([calendar], { type: 'text/calendar' });
        const link = document.createElement('a');

        link.href = window.URL.createObjectURL(blob);
        link.download = `${title}.ics`;
        link.click();
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-event-list {
    &__group-title {
      @extend %heading-h2;

      margin-top: $spacing--100;
      font-weight: $font-weight--bold;
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
      position: relative;
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

      display: inline-block;
      font-size: $font-size--24;
      color: $color-grayscale--1000;
      font-weight: $font-weight--bold;
      max-width: calc(100% - 35px);
    }

    &__title {
      @include font($font-size--18, null, $font-weight--regular);

      @include media(sm) {
        font-size: $font-size--20;
      }
    }

    &__text {
      @include font($font-size--16, null, $font-weight--regular);

      @include media(sm) {
        font-size: $font-size--18;
      }
    }

    &__download-button {
      position: absolute;
      top: $spacing--10;
      right: $spacing--10;

      @extend %button-reset;
    }

    &__no-results-text {
      color: $color-grayscale--200;
      padding: $spacing--50 0;
    }
  }
</style>
