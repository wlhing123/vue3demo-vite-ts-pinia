<template>
  <h1>{{ msg }}</h1>
  <button @click="res">点击</button>
</template>

<script setup lang="ts">
import request from '@/api/network.service';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('111');
});

const res = async () => {
  let result = await request({
    url: '/search/users2',
    method: 'get',
  });
  console.log(result);
};
defineProps<{ msg: string }>();
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
