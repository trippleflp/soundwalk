<template>
  <div class="qr">
    <h2 class="qr-header">QR-Code-Scanner</h2>
    <video class="qr-video" ref="vidRef"></video>
    <CstButton class="qr-button" :text="'Scan'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import QrScanner from 'qr-scanner';
import CstButton from '@/components/button.vue';
// eslint-disable-next-line
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';

export default defineComponent({
  name: 'Qr',
  components: { CstButton },
  setup() {
    QrScanner.WORKER_PATH = QrScannerWorkerPath;
    const vidRef = ref(null);

    onMounted(() => {
      const vidEl = vidRef.value as unknown as HTMLVideoElement;
      const qrScanner = new QrScanner(vidEl, (result) => {
        console.log('decoded qr code:', result);
      });

      qrScanner.start();
    });
    return {
      vidRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.qr {
  &-video {
    display: block;
    position: absolute;
    width: 210px;
    height: 210px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important ;
  }
}
</style>
