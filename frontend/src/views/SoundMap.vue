<template>
  <div class="soundmap">
    <h2>
      <img class="soundmap-header" alt="Soundwalk logo" src="@/assets/play.svg" />erneut abspielen
    </h2>
    <div class="soundmap-map">
      <MapContainer />
    </div>
    <p class="soundmap-text">
      Gehe zum angezeigten Standort und suche das abgespielte Geräusch. Dort findest du einen
      QR-Code für den nächsten Hinweis.
    </p>
    <CstButton class="soundmap-button" :text="'QR-Code gefunden'" :route="'/qr'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CstButton from '@/components/button.vue';
import MapContainer from '@/components/mapcontainer.vue';

export default defineComponent({
  name: 'Home',
  components: { CstButton, MapContainer },
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
