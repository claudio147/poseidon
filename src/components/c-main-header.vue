<template>
  <div :class="b()">
    <div :class="b('inner')">
      <!-- Mobile navigation trigger -->
      <button :class="b('mobile-nav-trigger')"
              title="Menü öffnen"
              @click="onClickNavigationTrigger">
        <span class="invisible">Menü öffnen</span>
        <img :class="b('burger-menu-icon')" src="../assets/menu.svg" alt="">
      </button>

      <!-- Navigation Desktop links -->
      <nav :class="b('navigation', { left: true, desktop: true })">
        <ul :class="b('list')">
          <li v-for="navItem in navigationLeft"
              :key="navItem.link"
              :class="b('list-item', { active: currentRoute === navItem.link })"
          >
            <router-link :to="navItem.link"
                         :title="navItem.title"
                         :class="b('link', { active: currentRoute === navItem.link })">
              {{ navItem.name }}
            </router-link>
            <ul v-if="navItem.children" :class="b('sub-level-list')">
              <li v-for="subNavItem in navItem.children"
                  :key="subNavItem.link"
                  :class="b('sub-level-list-item', { active: currentRoute === subNavItem.link })">
                <router-link :to="subNavItem.link"
                             :title="subNavItem.title"
                             :class="b('link', { active: currentRoute === subNavItem.link, 'sub-level': true })">
                  {{ subNavItem.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Logo / Home link -->
      <router-link to="/"
                   title="zur Startseite"
                   :class="b('link', { logo: true })"
                   @click.native="mobileNavigationIsOpen = false">
        <span class="invisible">zur Startseite</span>
        <img src="../assets/logo_200x160.png" alt="Logo Sportfischerverein Romanshorn" :class="b('logo')">
      </router-link>

      <!-- Navigation Desktop rechts -->
      <nav :class="b('navigation', { right: true, desktop: true })">
        <ul :class="b('list')">
          <li v-for="navItem in navigationRight"
              :key="navItem.link"
              :class="b('list-item', { active: currentRoute === navItem.link })"
          >
            <router-link :to="navItem.link"
                         :title="navItem.title"
                         :class="b('link', { active: currentRoute === navItem.link })">
              {{ navItem.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Mobile navigation -->
      <transition name="slide-fade">
        <nav v-if="mobileNavigationIsOpen" :class="b('mobile-navigation')">
          <ul :class="b('mobile-list')">
            <li v-for="navItem in completeNavigation"
                :key="navItem.link"
                :class="b('mobile-list-item')">
              <span>
                <router-link v-if="!navItem.children"
                             :to="navItem.link"
                             :title="navItem.title"
                             :class="b('link', { active: currentRoute === navItem.link, mobile: true })"
                             @click.native="onClickMobileNavigation($event, navItem)">
                  {{ navItem.name }}
                </router-link>
                <button v-else
                        :class="b('link', { mobile: true })"
                        @click="onClickMobileNavigation($event, navItem)">
                  {{ navItem.name }}
                  <img v-if="navItem.children && openSubLevel !== navItem.link"
                       src="../assets/down-arrow.svg"
                       alt=""
                       :class="b('arrow-icon')">

                  <img v-if="navItem.children && openSubLevel === navItem.link"
                       src="../assets/up-arrow.svg"
                       alt=""
                       :class="b('arrow-icon')">
                </button>
              </span>

              <transition name="top-fade">
                <ul v-if="navItem.children && openSubLevel === navItem.link" :class="b('mobile-sub-list')">
                  <li :class="b('mobile-sub-list-item')">
                    <router-link :to="navItem.link"
                                 :title="navItem.title"
                                 :class="b('link', { active: currentRoute === navItem.link, 'sub-level': true, mobile: true })"
                                 @click.native="onClickMobileNavigation()">
                      {{ navItem.title }}
                    </router-link>
                  </li>
                  <li v-for="subNavItem in navItem.children"
                      :key="subNavItem.link"
                      :class="b('mobile-sub-list-item')">
                    <router-link :to="subNavItem.link"
                                 :title="subNavItem.title"
                                 :class="b('link', { active: currentRoute === subNavItem.link, 'sub-level': true, mobile: true })"
                                 @click.native="onClickMobileNavigation($event, subNavItem)">
                      {{ subNavItem.name }}
                    </router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>

  /**
   * This component renderes the main header with the navigation for desktop and mobile.
   */
  export default {
    name: 'c-main-header',
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      return {
        /**
         * @type {Array} The navigation items for the left side.
         */
        navigationLeft: [
          {
            link: '/verein',
            title: 'Sportfischerverein',
            name: 'Verein',
            children: [
              {
                link: '/vorstand',
                title: 'Vorstand',
                name: 'Vorstand',
              },
              {
                link: '/geschichte',
                title: 'Vereinshistore des Sportfischervereins',
                name: 'Vereinshistorie',
              },
              {
                link: '/news',
                title: 'News und Aktuelles',
                name: 'News und Aktuelles',
              },
              {
                link: '/termine',
                title: 'Termine',
                name: 'Termine',
              },
              {
                link: '/dokumente',
                title: 'Dokumente zum Download',
                name: 'Dokumente',
              },
              {
                link: '/anmeldung',
                title: 'Anmeldung',
                name: 'Anmeldung',
              },
              {
                link: '/links',
                title: 'Links',
                name: 'Links',
              }
            ],
          },
          {
            link: '/jungfischer',
            title: 'Unsere Jungfischer',
            name: 'Jungfischer',
            children: [
              {
                link: '/jungfischer-termine',
                title: 'Jahresprogramm',
                name: 'Jahresprogramm',
              },
              {
                link: '/anmeldung',
                title: 'Anmeldung',
                name: 'Anmeldung',
              }
            ],
          }
        ],

        /**
         * @type {Array} The navigation items for the right side.
         */
        navigationRight: [
          {
            link: '/galerie',
            title: 'Bilder vom Verreinsleben',
            name: 'Galerie',
          },
          {
            link: '/kontakt',
            title: 'Kontaktformular',
            name: 'Kontakt',
          }
        ],

        /**
         * @type {Boolean} Shows if the mobile navigation is open.
         */
        mobileNavigationIsOpen: false,

        /**
         * @type {String} Holds the link of the currently opened sub levels.
         */
        openSubLevel: null,
      };
    },

    computed: {
      /**
       * Gets the current route link.
       *
       * @returns {String}
       */
      currentRoute() {
        return this.$route.path;
      },

      /**
       * Gets the complete navigation in a single Array.
       *
       * @returns {Array.<Object>}
       */
      completeNavigation() {
        return [
          ...this.navigationLeft,
          ...this.navigationRight,
        ];
      },
    },
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
       * Mobile navigation trigger event handler.
       */
      onClickNavigationTrigger() {
        this.mobileNavigationIsOpen = !this.mobileNavigationIsOpen;
      },

      /**
       * Click mobile navigation item click event handler.
       * Will close the mobile navigation after a short delay.
       *
       * @param {Object} event - The click event.
       * @param {Object} navItem - The clicked navigation item.
       */
      onClickMobileNavigation(event, navItem) {
        const { children, link } = navItem || {};

        if (children && children.length) {
          if (this.openSubLevel !== link) {
            this.openSubLevel = link;
          } else {
            this.openSubLevel = null;
          }
        } else {
          setTimeout(() => {
            this.mobileNavigationIsOpen = false;
          }, 50);
        }
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-main-header {
    $this: &;

    position: fixed;
    width: 100vw;
    background-color: $color-primary--1;
    display: flex;
    justify-content: center;
    z-index: 100;

    @include media(sm) {
      min-height: 60px;
      border-top: $spacing--30 solid $color-grayscale--1000;
    }

    &__inner {
      color: white;
      display: flex;
      width: 100vw;
      justify-content: space-between;
      min-height: 60px;

      @include media(sm) {
        min-height: 60px;
        justify-content: initial;
      }

      @include media(lg) {
        flex: 1 0 $contentWidth;
        max-width: $contentWidth;
      }
    }

    &__navigation {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: calc(50% - 50px);
      max-width: calc(50% - 50px);

      @include media(md) {
        flex-basis: calc(50% - 100px);
        max-width: calc(50% - 100px);
      }
    }

    &__navigation--desktop {
      display: none;

      @include media(sm) {
        display: block;
      }

    }

    &__navigation--left {
      #{$this}__list {
        /*justify-content: flex-end;*/
      }
    }

    &__navigation--right {
      #{$this}__list {
        /*justify-content: flex-start;*/
      }

      #{$this}__list-item {
        justify-content: center;
      }
    }

    &__list {
      @extend %list-reset;

      display: flex;
      padding: 0 $spacing--25;
      height: 100%;
      justify-content: space-around;
    }

    &__list-item {
      display: flex;
      align-items: center;
      position: relative;
      border-bottom: 4px solid transparent;
      min-width: 160px;
      justify-content: center;

      @include media(md) {
        min-width: 200px;
      }
    }

    &__list-item--active {
      border-bottom: 4px solid $color-secondary--1;
    }

    &__link {
      display: block;
      color: $color-grayscale--1000;
      width: 100%;
      text-align: center;
      padding: $spacing--15 0;
      font-size: $font-size--18;
      font-weight: $font-weight--bold;

      &:hover,
      &:focus {
        color: $color-secondary--1;
      }
    }

    &__link--sub-level {
      font-weight: $font-weight--regular;
      font-size: $font-size--16;
    }

    &__list-item:hover &__sub-level-list {
      transform: scaleY(1);
    }

    &__link--logo {
      z-index: 1;
      display: block;
      justify-content: center;
      position: relative;
      flex: 1 0 100px;
      max-width: 100px;
      max-height: 60px;
      padding: $spacing--10;

      @include media(sm) {
        display: flex;
        padding: 0;
        flex: 1 0 100px;
        max-width: 100px;
      }

      @include media(md) {
        flex: 1 0 200px;
        max-width: 200px;
      }
    }

    &__link--active {
      color: $color-secondary--1;
    }

    &__link--mobile#{$this}__link--active {
      border-bottom: 4px solid $color-secondary--1;
    }

    &__link--mobile {
      @extend %button-reset;

      width: 100%;
      padding: $spacing--20 $spacing--15;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover,
      &:focus {
        color: $color-grayscale--1000;
      }
    }

    &__link--mobile#{$this}__link--sub-level {
      padding-left: $spacing--30;
    }

    &__logo {
      max-width: 100%;
      max-height: calc(100% + 25px);

      @include media(sm) {
        position: absolute;
        top: -$spacing--25;
        max-height: calc(100% + 15px);
      }
    }

    &__sub-level-list {
      @extend %list-reset;

      position: absolute;
      transform: scaleY(0);
      transform-origin: top;
      background-color: $color-primary--1;
      top: 60px;
      min-width: 160px;
      transition: all 200ms ease-out;

      @include media(sm) {
        border-top: 1px solid $color-secondary--1;
      }

      @include media(md) {
        min-width: 200px;
      }
    }

    &__sub-level-list-item {
      border-bottom: 1px solid $color-grayscale--400;
    }

    &__sub-level-list-item--active {
      border-bottom: 4px solid $color-secondary--1;
    }

    &__mobile-nav-trigger {
      @extend %button-reset;

      padding: $spacing--10 $spacing--15;

      @include media(sm) {
        display: none;
      }
    }

    &__burger-menu-icon {
      width: 30px;
      height: 30px;
    }

    &__mobile-navigation {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100vw;
      height: calc(100vh - 60px);
      border-top: 1px solid $color-grayscale--200;
      // background-color: $color-grayscale--0;
      overflow-y: auto;
      background-color: $color-grayscale--0;
    }

    &__mobile-list {
      @extend %list-reset;

      padding-bottom: 100px;
    }

    &__mobile-list-item {
      border-bottom: 1px solid $color-grayscale--200;
    }

    &__mobile-sub-list {
      @extend %list-reset;
    }

    &__mobile-sub-list-item {
      border-top: 1px solid $color-grayscale--100;

      &:first-child {
        border-top-color: $color-grayscale--200;
      }
    }

    &__arrow-icon {
      width: 25px;
      height: 25px;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
      transition: all 300ms ease;
    }
    .slide-fade-leave-active {
      transition: all 300ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter-to, .slide-fade-leave {
      transform: translateX(0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(-100%);
    }

    .top-fade-enter-active, .top-fade-leave-active {
      transition: all 300ms ease-in-out;
    }

    .top-fade-enter-to, .top-fade-leave {
      opacity: 1;
    }

    .top-fade-enter, .top-fade-leave-to {
      opacity: 0;
    }
  }
</style>
