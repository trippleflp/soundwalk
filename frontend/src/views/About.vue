<template>
  <div class="about">
    <h2 class="about-header">Über <span class="italic">Sound Walk</span></h2>
    <img class="about-image" alt="Soundwalk logo" src="@/assets/Soundwalk.png" />
    <p class="about-text">
      Der Sound Walk soll spielerisch dazu beitragen, sich mit offeneren Ohren durch den Alltag zu
      bewegen.
    </p>
    <p class="about-text">
      Wie klingt unsere Umgebung? Woher kommen Geräusche, Klänge und Rhythmen. Ab wann ist etwas
      Musik?
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
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

.about {
  &-header {
    color: $color-blue-light;
    font-weight: 600;
    font-size: 27px;
    line-height: 31px;
    text-align: center;
    margin-top: 28px;
    margin-bottom: 28px;
    > span {
      font-style: italic;
    }
  }

  &-image {
    display: block;
    margin: 37px auto 50px auto;
  }
  &-text {
    display: block;
    padding: 0 45px;
    font-size: 13px;
    line-height: 23px;
    margin-top: 30px;
  }
  &-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
  }
}
</style>
