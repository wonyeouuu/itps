import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/HomePage.vue'
import ResultPage from './components/ResultPage.vue'
import PeriodChart from './components/questionList/PeriodChart.vue'
import QuestionList from './components/questionList/QuestionList.vue'
import ExportGraph from './components/ExportGraph.vue'

Vue.use(VueRouter)

const router = new VueRouter()
router.map({
    '/': {
        component: HomePage
    },
    '/questionList/:questionPhase': {
        name: 'questionList',
        component: QuestionList
    },
    '/graph': {
        name: 'graph',
        component: ExportGraph
    },
    '/result': {
        name: 'result',
        component: ResultPage
    }
})

export default router
