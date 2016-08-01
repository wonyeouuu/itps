import Vue from 'vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'

import $ from 'jquery'

sync(store, router)

router.start(App, '#app')
//NOTE: remember to uncomment this part next part 3
// $(document).ready(() => {
//     $('.text-base').on('click', function() {
//         $('.main-container').animate({height: 0}, 1000, function() {
//             $(this).hide()
//             // $('.questionListContainer').not('#questionList1').hide()
//             $('#questionList1').fadeIn().css('display', 'flex')
//
//         })
//     })
//     $('.button-down').on('click', function() {
//         $('.questionListContainer').not($(this).closest('.questionListContainer')).hide()
//         $(this).closest('.questionListContainer').fadeOut(null, () => {
//             $(this).closest('.questionListContainer').next().fadeIn().css('display', 'flex')
//         })
//     })
//     $('.button-up').on('click', function() {
//         $('.questionListContainer').not($(this).closest('.questionListContainer')).hide()
//         $(this).closest('.questionListContainer').fadeOut(null, () => {
//             $(this).closest('.questionListContainer').prev().fadeIn().css('display', 'flex')
//         })
//     })
// })
