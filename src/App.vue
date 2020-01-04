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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
