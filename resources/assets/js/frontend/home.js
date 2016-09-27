import Vue from 'vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'

import $ from 'jquery'

Vue.directive('img', function(url) {
  var img = new Image();
  img.src = url;

  img.onload = function() {
    this.el.src = url;
    $(this.el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000)
  }.bind(this);

});

window.onload = function () {
    console.log('load')
}

sync(store, router)

router.start(App, '#app')
