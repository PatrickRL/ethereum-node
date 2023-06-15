import { defineStore } from "pinia";

export const useStakingStore = defineStore("theStaking", {
  state: () => {
    return {
      selectedIcon: "",
      importValidatorKeyActive: true,
      passwordInputActive: false,
      stats: {},
      selectedValidatorService: {},
      totalBalance: 0,
      keys: [],
      forceRefresh: false,
      storedValidatorKeys: [],
      insertKeyBoxActive: true,
      enterPasswordBox: false,
      exitChainForMultiValidatorsActive: false,
      removeForMultiValidatorsActive: false,
      grafitiForMultiValidatorsActive: false,
      display: true,
      isDragOver: false,
      keyFiles: [],
      dragStep: false,
      clickService: false,
      modalGuide: false,
      passPointer: false,
      keyCounter: 0,
    };
  },
  actions: {},
});
