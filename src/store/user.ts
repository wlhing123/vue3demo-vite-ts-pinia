import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    updataName(name: string) {
      this.name = name;
    },
  },
});
