<template>
  <div class="soundmap">
    <h2 @click="if (audio) audio.play();">
      <img class="soundmap-header" alt="Soundwalk logo" src="@/assets/play.svg" />erneut abspielen
    </h2>
    <div class="soundmap-map">
      <MapContainer :iconPositions="location" v-if="location !== null" />
    </div>
    <p class="soundmap-text">
      Gehe zum angezeigten Standort und suche das abgespielte Geräusch. Dort findest du einen
      QR-Code für den nächsten Hinweis.
    </p>
    <CstButton class="soundmap-button" :text="'QR-Code gefunden'" :route="'/qr'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CstButton from '@/components/button.vue';
import MapContainer from '@/components/mapcontainer.vue';
import State from '@/store';
import { getSoundFileLink } from '@/http-calls';

export default defineComponent({
  name: 'Home',
  components: { CstButton, MapContainer },
  setup() {
    const audio = ref(null as unknown as HTMLAudioElement);
    const location = ref(null as unknown as number[][]);

    async function getSound() {
      await State.waitDone();
      const id = State.currentId;

      audio.value = new Audio(getSoundFileLink(id));
      console.log(State);
      location.value = [State.data[id].longlat];
    }

    getSound();

    return {
      audio,
      location,
    };
  },
});
</script>

<style lang="scss" scoped>
.soundmap {
  &-header {
    height: 31px;
    transform: translateY(25%);
    margin-right: 15px;
  }
  &-map {
    height: 300px;
    padding: 0 20px;
    margin: 30px auto;
  }
}
</style>
