import Vue from 'vue'
import store from './vuex/store'
import IHA from './components/IHA.vue'
import QuestionList from './components/questionList/QuestionList.vue'

import $ from 'jquery'




new Vue({
    el: 'body',
    components: { IHA, QuestionList },
    store,
    methods: {
        jumpTo(h) {
            $('html, body').animate({
                scrollTop: $(`#${h}`).offset().top
            }, 1000);
        }
    }
})
