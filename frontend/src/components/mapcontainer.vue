<template>
  <div style="width: 100%; height: 100%">
    <l-map
      ref="map"
      style="width: 100%; height: 100%"
      v-model:zoom="mapConfig.zoom"
      :center="icons[0].latlng"
    >
      <!-- url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" -->
      <l-tile-layer
        url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=qzQFAH5nqsBIY2mqY8FlVHRwcengX1jD2LACCbJBPywkGmOiF55mcVOw67MqNawW"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker :lat-lng="icon.latlng" v-for="icon in icons" v-bind:key="icon">
        <l-icon :icon-url="icon.url" :icon-size="icon.size" />
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
  props: {
    iconPositions: Array,
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  setup(props) {
    // eslint-disable-next-line
    const icon = require('@/assets/pin.png');
    const half = (props.iconPositions as unknown as Array<number[]>).length / 2;
    const mapConfig = {
      zoom: 19 - half,
    };

    const icons = props.iconPositions?.map((longlat) => ({
      size: [48, 51],
      url: icon,
      latlng: longlat as number[],
    }));

    return {
      mapConfig,
      icons,
    };
  },
});
</script>
