<template>
  <div class="contact">
    <h2 class="contact-header">Kontakt</h2>
    <p class="contact-text">Schreibe gerne eine Mail an:</p>
    <p class="contact-text">Johanna Rohr <br />johanna.rohr@posteo.de</p>
    <p class="contact-text">Friedrich-List-Straße 2 <br />86153 Augsburg</p>
    <img class="contact-image" alt="Soundwalk logo" src="@/assets/Soundwalk-small.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
});
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.contact {
  &-header {
    color: $color-blue-light;
    font-weight: 600;
    font-size: 27px;
    line-height: 31px;
    text-align: center;
    margin-top: 37px;
    margin-bottom: 32px;
  }

  &-image {
    position: absolute;
    right: 31px;
    bottom: 35px;
  }
  &-text {
    display: block;
    padding: 0 45px;
    font-size: 13px;
    line-height: 23px;
    margin-top: 30px;
  }
  &-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
  }
}
</style>
