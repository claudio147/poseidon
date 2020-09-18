<template>
  <div id="app">
    <c-main-header />
    <l-default>
      <transition name="slide-fade">
        <keep-alive exclude="news-detail">
          <router-view />
        </keep-alive>
      </transition>
    </l-default>
    <c-main-footer />
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import cMainHeader from './components/c-main-header';
  import cMainFooter from './components/c-main-footer';
  import lDefault from './components/l-default';

  window.database = Firebase.initializeApp({
    apiKey: 'AIzaSyCe49EcSSZXPhQpKmz9Ut-5wiqG9HnIpqY',
    authDomain: 'https://poseidon-b52a9.firebaseio.com/',
    databaseURL: 'https://poseidon-b52a9.firebaseio.com/',
    projectId: 'poseidon-b52a9',
    storageBucket: 'storageBucket',
    messagingSenderId: 'web'
  }).database();

  export default {
    components: {
      lDefault,
      cMainHeader,
      cMainFooter,
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Home',
      // all titles will be injected into this template
      titleTemplate: '%s | Fischereiverein Romanshorn',
      htmlAttrs: {
        lang: 'de',
      },
    },

    created() {
      // Initializes the storyblok instance.
      this.$storyblok.init({
        accessToken: '84Gnj7hdJqclcGCBaTpdOAtt'
      });
      this.$store.dispatch('fetchTexts', { vm: this });
    }
  };
</script>

<style lang="scss">
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
