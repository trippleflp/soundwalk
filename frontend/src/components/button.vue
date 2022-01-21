<template>
  <router-link :to="props.route"
    ><div :class="{ dark: dark }">{{ props.text }}</div></router-link
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cstButtom',
  props: {
    text: String,
    route: String,
    dark: Boolean,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
div {
  padding: 8px 20px;
  background-color: $color-blue-light;
  border-radius: 9px;
  width: min-content;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  color: white;
}
.dark {
  background: $color-blue;
}
</style>
