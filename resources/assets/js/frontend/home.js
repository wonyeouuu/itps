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

$(document).ready(() => {
    var lastScrollTop = 0
    $(window).scroll(() => {
        var scrollTop = $(this).scrollTop()
        if (scrollTop > lastScrollTop) {
            console.log('scroll donw')
        } else {
            console.log('scroll up')
        }
        lastScrollTop = scrollTop
    })
})
