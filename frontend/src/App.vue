<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './components/navigation.vue';

export default defineComponent({
  components: {
    Navigation,
  },
});
</script>

<style lang="scss">
@import 'styles/colors';
@import 'styles/reset';
@import url(https://allfont.de/allfont.css?fonts=franklin-gothic-book);

#app {
  font-family: Franklin Gothic Book, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  background-color: $color-blue-dark;
}
</style>
