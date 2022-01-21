<template>
  <div class="track">
    <h2>Track anhören</h2>

    <div class="track-btn" @click="playPause()">
      <img class="track-play" alt="Soundwalk logo" src="@/assets/play.svg" v-if="!isPlaying" />
      <img class="track-play" alt="Soundwalk logo" src="@/assets/pause.svg" v-if="isPlaying" />
    </div>
    <div class="track-progress">
      <div ref="slider" class="track-progress__slider"></div>
    </div>
    <div class="track-footer">
      <img class="track-share" alt="Soundwalk logo" src="@/assets/share.svg" />
      <img class="track-download" alt="Soundwalk logo" src="@/assets/download.svg" @href="link" />
    </div>
  </div>
</template>

<script lang="ts">
import { getFinalTrackLink } from '@/http-calls';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import State from '@/store';
import { defineComponent, onBeforeMount, ref } from 'vue';

export default defineComponent({
  name: 'PlaySound',
  setup() {
    onBeforeMount(() => {
      if (State.currentId !== 9) {
        router.replace('/tracknotfinished');
      }
    });
    const slider = ref<HTMLElement | null>(null);
    const isPlaying = ref(false);
    const link = getFinalTrackLink();
    const audio = new Audio(link);

    function playPause() {
      if (isPlaying.value) {
        audio.pause();
        isPlaying.value = false;
      } else {
        audio.play();
        isPlaying.value = true;
      }
    }
    audio.addEventListener('timeupdate', () => {
      const perc = (audio.currentTime / audio.duration) * 100;
      if (!slider.value) {
        return;
      }
      slider.value.style.left = `${perc}%`;
    });

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      isPlaying.value = false;
    });

    return {
      link,
      playPause,
      isPlaying,
      slider,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
.track {
  &-btn {
    width: 90px;
    height: 90px;
    margin: 150px auto;
    position: relative;
    background: #0f5ba2;
  }
  &-play {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-progress {
    margin: 0 50px;
    height: 4px;
    background: $color-blue-light;
    position: relative;
    &__slider {
      position: absolute;
      width: 5px;
      height: 26px;
      background: $color-blue-light;
      transform: translateY(-50%);
      top: 50%;
    }
  }
  &-footer {
    position: absolute;
    bottom: 9%;
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    width: 100%;
    right: 50px;
    > img {
      padding-left: 20px;
      height: 40px;
    }
  }
}
</style>
