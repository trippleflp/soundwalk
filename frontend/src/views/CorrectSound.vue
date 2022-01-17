<template>
  <div class="home">
    <h2 class="home-text">
      Du hast das <br />
      richtige Geräusch gefunden!
    </h2>
    <CstButton class="home-button--first" :text="'nächstes Geräusch'" :route="'/playsound'" />
    <CstButton class="home-button" :text="'gesammelte Geräusche'" :route="'/soundlist'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CstButton from '@/components/button.vue';

export default defineComponent({
  name: 'Home',
  components: { CstButton },
});
</script>

<style lang="scss" scoped>
.home {
  &-text {
    width: 260px;
    margin: 280px auto;
    text-align: center;
  }
  &-button--first {
    bottom: -40px;
    left: 50%;
    position: relative;
  }
}
</style>
