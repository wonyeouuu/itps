import Vue from 'vue'
import store from './vuex/store'
import IHA from './components/IHA.vue'
import QuestionList from './components/questionList/QuestionList.vue'

new Vue({
    el: 'body',
    components: { IHA, QuestionList },
    store
})
