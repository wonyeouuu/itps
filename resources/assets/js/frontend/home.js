import $ from 'jquery';
import Vue from 'Vue';

new Vue({
    el: '.btn-group',
    data() {
        "use strict";
        return {
            showI: false,
            showH: false,
            showA: false
        }
    },
    methods: {
        hover(target, status) {
            "use strict";
            switch(target) {
                case "I":
                    this.showI = status;
                    break;
                case "H":
                    this.showH = status;
                    break;
                case "A":
                    this.showA = status;
                    break;
            }
        }
    }
});


