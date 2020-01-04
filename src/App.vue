<template>
  <div id="app">
    <l-default>
      <router-view />
    </l-default>
  </div>
</template>

<script>
  import lDefault from './components/l-default';

  export default {
    components: {
      lDefault,
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
  };
</script>

<style lang="scss">

</style>
