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
@import url('https://allfont.de/allfont.css?fonts=franklin-gothic-book');

#app {
  font-family: Franklin Gothic Book, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;
  height: 100vh;
  background-color: $color-blue-dark;
}

p {
  font-size: 18px;
  line-height: 23px;
  display: block;
  padding: 0 30px;
}

h2 {
  color: $color-blue-light;
  font-weight: 600;
  font-size: 27px;
  line-height: 31px;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 28px;
}
</style>
