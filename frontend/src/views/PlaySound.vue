<template>
  <img class="play" alt="Soundwalk logo" src="@/assets/play.svg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlaySound',
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
.play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
