<template>
  <div class="route">
    <h2 class="route-header">Zurückgelegte Strecke</h2>
    <div class="route-map">
      <MapContainer :iconPositions="locations" v-if="locations" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MapContainer from '@/components/mapcontainer.vue';
import State from '@/store';

export default defineComponent({
  name: 'Route',
  components: { MapContainer },
  setup() {
    const locations = ref(null as unknown as number[][]);
    async function populateList() {
      await State.waitDone();
      const list: number[][] = [];
      State.data
        .map((sound, _) => sound.longlat)
        .removeLastCondition(State.currentId !== 9)
        .forEach((longlat, _) => {
          list.push(longlat);
        });
      locations.value = list;
    }

    populateList();

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
