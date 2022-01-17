<template>
  <img class="play" alt="Soundwalk logo" src="@/assets/play.svg" @click="audio.play()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import State from '@/store';
import { getSoundFileLink } from '@/http-calls';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

export default defineComponent({
  name: 'PlaySound',
  setup() {
    const id = State.currentId;
    if (id >= 9) {
      router.push('/track');
    }
    const audio = new Audio(getSoundFileLink(id));
    audio.addEventListener('ended', () => {
      router.push('/soundmap');
    });

    return {
      id,
      audio,
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
