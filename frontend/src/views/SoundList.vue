<template>
  <div class="sounds">
    <h2>Gefundene Geräusche</h2>
    <ul class="sounds-list">
      <li class="sounds-item" v-for="sound in list" :key="sound">
        <template v-if="sound">
          <div @click="sound.audio.play()">
            <img class="sounds-item__play" alt="Soundwalk logo" src="@/assets/play.svg" />
            <span>{{ sound.name }}</span>
          </div>
        </template>
        <template v-else>
          <img class="sounds-item__play" alt="Soundwalk logo" src="@/assets/play-nofill.svg" />
        </template>
      </li>
    </ul>

    <p v-if="len < 8">Dir fehlen noch Geräusche, um den Track anzuhören.</p>
    <CstButton
      class="sounds-button"
      :text="len < 8 ? 'nächstes Geräusch' : 'Track anhören'"
      :route="'/playsound'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CstButton from '@/components/button.vue';
import State from '@/store';
import { getSoundFileLink } from '@/http-calls';

export default defineComponent({
  name: 'SoundList',
  components: { CstButton },
  setup() {
    const list = ref(new Array(8));
    const len = ref(0);
    async function populateList() {
      await State.waitDone();
      console.log(State.data);

      State.data
        .map((sound, i) => ({ name: sound.name, audio: new Audio(getSoundFileLink(i)) }))
        .removeLastCondition(State.currentId < 8)
        .forEach((sound, i) => {
          list.value[i] = sound;
        });
      len.value = State.currentId;
    }

    populateList();

    return {
      list,
      len,
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
    margin-bottom: 30px;
  }
  &-item {
    font-weight: 650;
    font-size: 18px;
    margin-bottom: 20px;
    position: relative;
    * span {
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
  // &-button {
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   bottom: 80px;
  // }
}
</style>
