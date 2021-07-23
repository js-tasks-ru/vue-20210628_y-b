import {createApp} from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      a: 0,
      b: 0,
      currentAction: '➕',
      actions: {
        '➕': (a, b) => a + b,
        '➖': (a, b) => a - b,
        '✖': (a, b) => a * b,
        '➗': (a, b) => a / b
      }
    };
  },
  computed: {
    result() {
      return this.actions[this.currentAction](this.a, this.b);
    }
  },
}).mount('#app');
