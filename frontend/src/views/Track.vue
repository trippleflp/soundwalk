<template>
  <div class="track">
    <h2>Track anhören</h2>

    <div class="track-btn">
      <img class="track-play" alt="Soundwalk logo" src="@/assets/play.svg" />
    </div>
    <div class="track-progress">
      <div class="track-progress__slider"></div>
    </div>
    <div class="track-footer">
      <img class="track-share" alt="Soundwalk logo" src="@/assets/share.svg" />
      <img class="track-download" alt="Soundwalk logo" src="@/assets/download.svg" />
    </div>
  </div>
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
    transform: translate(-40%, -50%);
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
