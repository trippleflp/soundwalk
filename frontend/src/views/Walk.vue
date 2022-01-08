<template>
  <div class="route">
    <h2 class="route-header">Zurückgelegte Strecke</h2>
    <div class="route-map">
      <MapContainer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapContainer from '@/components/mapcontainer.vue';

export default defineComponent({
  name: 'Route',
  components: { MapContainer },
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
