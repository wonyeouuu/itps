import Vue from 'vue'
import store from './vuex/store'
import IHA from './components/IHA.vue'
import QuestionList from './components/questionList/QuestionList.vue'
import PeriodChart from './components/questionList/PeriodChart.vue'

import $ from 'jquery'




new Vue({
    el: 'body',
    components: { IHA, QuestionList, PeriodChart },
    store,
    methods: {
        jumpTo(h) {
            $('.main-container').animate({height: 'toggle'}, 1000)
            $('#questionList1').animate({height: 'toggle'}, 1000)
        }
    }
})

$(document).ready(() => {
    $('.text-base').on('click', function() {
        $('.main-container').animate({height: 0}, 1000, function() {
            $(this).hide()
            $('.questionListContainer').not('#questionList1').hide()
        })
    })
    $('.button-down').on('click', function() {
        $('.questionListContainer').not($(this).closest('.questionListContainer')).hide()
        $(this).closest('.questionListContainer').fadeOut(null, () => {
            $(this).closest('.questionListContainer').next().fadeIn()
        })
    })
    $('.button-up').on('click', function() {
        $('.questionListContainer').not($(this).closest('.questionListContainer')).hide()
        $(this).closest('.questionListContainer').fadeOut(null, () => {
            $(this).closest('.questionListContainer').prev().fadeIn()
        })
    })
})
