<template>
  <div>{{ props.text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cstButtom',
  props: {
    text: String,
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
}
</style>
