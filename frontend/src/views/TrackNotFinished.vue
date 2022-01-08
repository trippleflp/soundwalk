<template>
  <div class="track">
    <h2 class="track-header">Track anhören</h2>
    <p class="track-text">Dir fehlen noch Geräusche, um den Track anzuhören.</p>
    <CstButton class="home-button" :text="'nächstes Geröusch'" :route="'/playsound'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CstButton from '@/components/button.vue';

export default defineComponent({
  name: 'TrackNotFinished',
  components: { CstButton },
});
</script>

<style lang="scss" scoped>
.track {
  &-text {
    padding: 0 60px;
    position: absolute;
    top: 50%;
  }
}
</style>
