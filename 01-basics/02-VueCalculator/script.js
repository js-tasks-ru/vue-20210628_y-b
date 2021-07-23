import {createApp} from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      a: 0,
      b: 0,
      currentAction: '➕',
      actionFunctions: {
        '➕': (a, b) => a + b,
        '➖': (a, b) => a - b,
        '✖': (a, b) => a * b,
        '➗': (a, b) => a / b
      }
    };
  },
  computed: {
    actions() {
      return Object.keys(this.actionFunctions);
    },
    result() {
      return this.actionFunctions[this.currentAction](this.a, this.b);
    }
  },
}).mount('#app');
