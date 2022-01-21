<template>
  <div class="home">
    <img class="home-image" alt="Soundwalk logo" src="@/assets/Soundwalk.jpg" />
    <p class="home-text">
      Willkommen bei Augsburgs akustischer Schnitzeljagd. Höre genau hin und finde jeweils die
      nächste Station. Am Ende kannst du dir einen Track aus allen Geräuschen anhören.
    </p>
    <CstButton class="home-button" :text="'Start'" :route="'/playsound'" />
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
  height: 100%;
  &-image {
    display: block;
    margin: 37px auto 50px auto;
    height: 42%;
  }
  // &-text {
  //   display: block;
  //   padding: 0 30px;
  // }
}
</style>
