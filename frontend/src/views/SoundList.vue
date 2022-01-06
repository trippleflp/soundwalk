<template>
  <div class="sounds">
    <h2>Gefundene Geräusche</h2>
    <ul class="sounds-list">
      <li class="sounds-item" v-for="sound in list" :key="sound">
        <template v-if="sound">
          <img class="sounds-item__play" alt="Soundwalk logo" src="@/assets/play.svg" />
          <span>{{ sound }}</span>
        </template>
        <template v-else>
          <img class="sounds-item__play" alt="Soundwalk logo" src="@/assets/play-nofill.svg" />
        </template>
      </li>
    </ul>

    <p>Dir fehlen noch Geräusche, um den Track anzuhören.</p>
    <CstButton class="sounds-button" :text="'nächstes Geräusch'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CstButton from '@/components/button.vue';

export default defineComponent({
  name: 'SoundList',
  components: { CstButton },
  setup() {
    const list = [
      'Briefkasten',
      'Quietscheentenrad',
      'Parkscheinautomat',
      'Tram',
      'Kanalbrücke',
      'Mülltonne',
      null,
      null,
    ];
    function logmich() {
      // eslint-disable-next-line no-console
      console.log('lol');
    }
    return {
      logmich,
      list,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
.sounds {
  &-list {
    list-style: none;
    padding-left: 50px;
  }
  &-item {
    font-weight: 650;
    font-size: 18px;
    margin-bottom: 20px;
    position: relative;
    > span {
      position: absolute;
      color: $color-blue-light;
      padding-left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    &__play {
      width: 26px;
    }
  }
  &-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
  }
}
</style>
