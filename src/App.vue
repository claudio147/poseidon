<template>
  <div id="app">
    <c-main-header />
    <l-default>
      <router-view />
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
      titleTemplate: '%s | Sportfischerverein Romanshorn',
      htmlAttrs: {
        lang: 'de',
      },
    },

    created() {
      // Initializes the storyblok instance.
      this.$storyblok.init({
        accessToken: '84Gnj7hdJqclcGCBaTpdOAtt'
      });
    }
  };
</script>

<style lang="scss">

</style>
