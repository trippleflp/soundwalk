<template>
  <div class="navigation">
    <header class="navigation-header">
      <h1 class="navigation-heading">SOUND WALK</h1>
      <img
        class="navigation-hamburger"
        src="@/assets/hamburger.svg"
        @click="navigationVisible = !navigationVisible"
      />
    </header>
    <nav class="navigation-list" v-show="navigationVisible">
      <li class="navigation-list-item" v-for="link in routeList" v-bind:key="link">
        {{ link }}
      </li>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import router from '@/router';

export default defineComponent({
  name: 'Navigation',
  setup() {
    const routeList = [
      'Start',
      'Gesammelte Geräusche',
      'Zurückgelegte Route',
      'Track anhören',
      'Über Sound Walk',
      'Kontakt',
    ];

    const navigationVisible = ref(false);

    return {
      routeList,
      navigationVisible,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/colors';
@import url('https://fonts.googleapis.com/css2?family=Rationale&display=swap');

$header-height: 55px;

.navigation {
  &-header {
    position: sticky;
    width: 100%;
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0px;
      height: 2px;
      width: 100%;
      background-color: $color-blue-light;
    }
  }
  &-heading {
    font-family: Rationale;
    font-size: 36px;
    line-height: 42px;
    margin-left: 11px;
    color: $color-text;
  }

  &-hamburger {
    margin-right: 16px;
  }

  &-list {
    height: calc(100vh - $header-height);
    background-color: $color-blue-dark;
    position: absolute;
    width: 100vw;
    z-index: 10;
    &-item {
      color: $color-blue-light;
      font-size: 20px;
      line-height: 23px;
      text-align: right;
      padding: 20px 16px;
      list-style: none;
      border-bottom: 2px solid $color-blue;
    }
  }
}
</style>
