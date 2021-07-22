import {createApp} from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    plus() {
      this.counter++;
    }
  },
  template: `<button type="button" v-on:click="plus">{{ counter }}</button>`
}).mount('#app');
