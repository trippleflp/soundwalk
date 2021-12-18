<template>
  <div class="home">
    <img class="home-image" alt="Soundwalk logo" src="@/assets/Soundwalk.png" />
    <p class="home-text">
      Willkommen bei Augsburgs akustischer Soundjagd. Hör’ genau hin und finde jeweils die nächste
      Station. Am Ende kannst du dir einen Track aus den gesammelten Geräuschen anhören.
    </p>
    <CstButton class="home-button" :text="'Start'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CstButton from '@/components/button.vue';

export default defineComponent({
  name: 'Home',
  components: { CstButton },
  setup() {
    function logmich() {
      // eslint-disable-next-line no-console
      console.log('lol');
    }
    return {
      logmich,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  &-image {
    display: block;
    margin: 37px auto 50px auto;
  }
  &-text {
    display: block;
    padding: 0 45px;
    font-size: 13px;
    line-height: 23px;
  }
  &-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
  }
}
</style>
