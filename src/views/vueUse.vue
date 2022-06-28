<template>
  <div>
    <h1>测试vueUse的鼠标坐标</h1>
    <h3>{{ x }}，{{ y }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const { x, y } = useMouse();

    
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped></style>
