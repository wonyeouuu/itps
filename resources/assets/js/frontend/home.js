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
        hoverI: function() {
            "use strict";
            this.showI = !this.showI;
        },
        hoverH: function() {
            "use strict";
            this.showH = !this.showH;
        },
        hoverA: function() {
            "use strict";
            this.showA = !this.showA;
        }
    }
});


