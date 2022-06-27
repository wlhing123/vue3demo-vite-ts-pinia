<template>
  <div>
    {{ useStore.name }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/user';

const useStore = useUserStore();
useStore.updataName('李四');
</script>
