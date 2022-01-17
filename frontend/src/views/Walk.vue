<template>
  <div class="route">
    <h2 class="route-header">Zurückgelegte Strecke</h2>
    <div class="route-map">
      <MapContainer :iconPositions="locations" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapContainer from '@/components/mapcontainer.vue';
import State from '@/store';

export default defineComponent({
  name: 'Route',
  components: { MapContainer },
  setup() {
    const id = State.currentId;
    const locations = State.data
      .map((sound) => sound.longlat)
      .removeLastCondition(State.currentId !== 9);
    console.log(locations);

    return {
      locations,
    };
  },
});
</script>

<style lang="scss" scoped>
.route {
  &-map {
    height: 70vh;
    padding: 0 20px;
  }
}
</style>
