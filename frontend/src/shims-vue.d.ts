/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
declare module '@vue-leaflet/vue-leaflet';
