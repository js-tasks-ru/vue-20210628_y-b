import {createApp} from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      firstNum: 0,
      secondNum: 0,
      action: 'sum'
    };
  },
  computed: {
    result() {
      switch (this.action) {
        case 'sum':
          return this.firstNum + this.secondNum;
          break;
        case 'subtract':
          return this.firstNum - this.secondNum;
          break;
        case 'multiply':
          return this.firstNum * this.secondNum;
          break;
        case 'divide':
          return this.firstNum / this.secondNum;
          break;
        default:
          throw new Error('Unexpected action');
      }
    }
  },
}).mount('#app');
