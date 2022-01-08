<template>
  <div style="width: 100%; height: 100%">
    <l-map
      ref="map"
      style="width: 100%; height: 100%"
      v-model:zoom="mapConfig.zoom"
      :center="iconConfig.latlng"
    >
      <!-- url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" -->
      <l-tile-layer
        url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=qzQFAH5nqsBIY2mqY8FlVHRwcengX1jD2LACCbJBPywkGmOiF55mcVOw67MqNawW"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker :lat-lng="iconConfig.latlng">
        <l-icon :icon-url="iconConfig.url" :icon-size="iconConfig.size" />
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
/* eslint-disable object-curly-newline */
import { defineComponent, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';

export default defineComponent({
  name: 'MapContainer',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  setup() {
    // eslint-disable-next-line
    const icon = require('@/assets/pin.png');

    const mapConfig = {
      zoom: 19,
    };

    const iconConfig = {
      size: [48, 51],
      url: icon,
      latlng: [48.365949, 10.902682],
    };
    return {
      mapConfig,
      iconConfig,
    };
  },
});
</script>
