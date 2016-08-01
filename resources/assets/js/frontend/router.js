import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/HomePage.vue'
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
    '/gan': {
        component: PeriodChart
    }
})

export default router
