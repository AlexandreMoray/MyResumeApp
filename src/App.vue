<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
  @import "style/constants";

  body {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.4em;
    background-color: $main-dark;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $main-light;
  }

  a {
    color: $main-yellow;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
</style>
