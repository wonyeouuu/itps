import Vue from 'vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'

import $ from 'jquery'

Vue.directive('img', function(url) {
  const img = new Image()
  img.src = url
  img.onload = () => {
    this.el.src = url
    $(this.el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000)
  }
});

sync(store, router)

router.start(App, '#app')
