<template>
  <div class="qr">
    <h2 class="qr-header">QR-Code-Scanner</h2>
    <video class="qr-video" ref="vidRef"></video>
    <p v-if="falseQr">Der QR Code ist invalide</p>
    <!-- <CstButton class="qr-button" :text="'Scan'" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import QrScanner from 'qr-scanner';
// import CstButton from '@/components/button.vue';
// eslint-disable-next-line
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
import State from '@/store';
// eslint-disable-next-line
import router from '@/router';

export default defineComponent({
  name: 'Qr',
  // components: { CstButton },
  setup() {
    QrScanner.WORKER_PATH = QrScannerWorkerPath;
    const vidRef = ref(null);
    const falseQr = ref(false);
    const locationURL = new URL(window.location.href);

    const locationNum = locationURL.searchParams.get('num');
    if (locationNum) {
      const numValue = parseInt(locationNum, 10);
      if (State.currentId + 1 === numValue) {
        State.raiseCurrentId();
        router.push({ path: '/correctsound' });
      } else if (State.currentId === 0) {
        router.push({ path: '/' });
      }
    }
    onMounted(() => {
      const vidEl = vidRef.value as unknown as HTMLVideoElement;

      const qrScanner = new QrScanner(vidEl, (result) => {
        console.log('decoded qr code:', result);
        try {
          const url = new URL(result);
          const numString = url.searchParams.get('num');
          if (!numString) throw Error('no num paramter');
          const num = parseInt(numString, 10);
          if (State.currentId + 1 === num) {
            State.raiseCurrentId();
            router.push({ path: '/correctsound' });
          }
        } catch {
          falseQr.value = true;
        }
      });

      qrScanner.start();
    });
    return {
      vidRef,
      falseQr,
    };
  },
});
</script>

<style lang="scss" scoped>
.qr {
  &-video {
    display: block;
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important ;
  }
}
</style>
