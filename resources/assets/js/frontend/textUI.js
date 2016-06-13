import Vue from 'Vue';
import Vuex from 'vuex';
import IHA from './components/IHA.vue';
import QuestionList from './components/questionList/QuestionList.vue';


Vue.use(Vuex);

new Vue({
    el: 'body',
    components: { IHA, QuestionList }
});
