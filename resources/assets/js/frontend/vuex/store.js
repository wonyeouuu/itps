import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import _ from 'underscore'

import {
    teethArr,
    teethArr4,
    teethArr8,
    teethArr10,
    connectors,
    connectorsSplit
} from './teethConstructor'
import { pivot, resetPermission } from './permission'


Vue.use(Vuex)
Vue.use(VueRouter)

const state = {
    questions: [],
    aboutShow: false,
    howToUseShow: false,
    activeGraphController: ""
};

const mutations = {
    INIT (state) {
        "use strict";
        state.questions = []
        let questions = [
            'Complete Dentures',//全口假牙 要上或下全部沒有才可以
            'Implants',//植體
            'Missing Teeth',// 缺牙
            'Retained Roots',// 殘根 牙冠爛掉 剩牙根
            'Fixed Partial Denture',//P M, crown first, then connector  固定假牙
            'Veneers',// 陶瓷貼片
            'Posts',// 差一根到牙根裡
            'Removable Partial Dentures',//不用選 只有開關 會出現另一種顏色補齊沒有牙冠的地方 活動假牙
            'Decayed Teeth',// 有真的牙齒冠才會有 蛀牙
            'Vitality(Conditions of the pulp)',// 牙根蛀出球 要有牙根才可以選
        ]
        questions.forEach((question, number) => {
            if (number == 4) {
                state.questions.push({
                    teeth: teethArr4(),
                    tableShow: false,
                    number: number + 1,
                    title: question
                })
            } else if (number == 7) {
                state.questions.push({
                    teeth: teethArr8(),
                    tableShow: false,
                    number: number + 1,
                    title: question
                })
            } else if (number == 9) {
                state.questions.push({
                    teeth: teethArr10(),
                    tableShow: false,
                    number: number + 1,
                    title: question
                })
            } else {
                state.questions.push({
                    teeth: teethArr(),
                    tableShow: false,
                    number: number + 1,
                    title: question
                })
            }
        })
    },

    SET_GRAPH_CONTROLLER (state, newStatus, dashed) {
        if (dashed) return
        state.activeGraphController = newStatus
    },

    TABLESHOW_TOGGLE (state, number) {
        "use strict";
        state.questions[_.findKey(state.questions, {number})].tableShow = !state.questions[_.findKey(state.questions, {number})].tableShow
    },

    TEETH_TOGGLE (state, number, teeth, newStatus) {
        "use strict";
        const questionIndex = _.findKey(state.questions, {number})
        const teethIndex = _.findKey(state.questions[questionIndex].teeth, { id: teeth })

        if (state.questions[questionIndex].teeth[teethIndex].selectable) {
            if (number == 1) {
                if (teethIndex <= 15) {
                    _.range(0, 16).forEach((teethIndex) => {
                        state.questions[questionIndex].teeth[teethIndex].selected = newStatus
                    })
                } else {
                    _.range(16, 32).forEach((teethIndex) => {
                        state.questions[questionIndex].teeth[teethIndex].selected = newStatus
                    })
                }
            } else {
                state.questions[questionIndex].teeth[teethIndex].selected = newStatus
            }
        }
        resetPermission(state)
    },

    TEETH_TOGGLE4 (state, teeth, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[4].teeth.a, { id: teeth })
        state.questions[4].teeth.a[teethIndex].selected = state.questions[4].teeth.a[teethIndex].selectable ? newStatus : false
        connectorsSplit().forEach(splitArr => {
            let connectorIndex = splitArr.reduce((carry, item) => carry + item)
            let selectable = splitArr.reduce((carry, item) => {
                return carry && state.questions[4].teeth.a[_.findKey(state.questions[4].teeth.a, { id: item.toString() })].selected != ""
            }, true)
            state.questions[4].teeth.b[_.findKey(state.questions[4].teeth.b, { id: connectorIndex })].selectable = selectable
        })
        resetPermission(state)
    },

    TEETH_TOGGLE8 (state, teeth, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[8 - 1].teeth.a, { id: teeth })
        state.questions[8 - 1].teeth.a[teethIndex].selected = state.questions[8 - 1].teeth.a[teethIndex].selectable ? newStatus : false
        connectorsSplit().forEach(splitArr => {
            let connectorIndex = splitArr.reduce((carry, item) => carry + item)
            let selectable = splitArr
            .map(toothIndex => {
                return state.questions[8 - 1].teeth.a[_.findKey(state.questions[8 - 1].teeth.a, {id: toothIndex.toString()})].selected
            })
            .filter(item => item)
            .length === 1
            state.questions[8 - 1].teeth.b[_.findKey(state.questions[8 - 1].teeth.b, { id: connectorIndex })].selectable = selectable
        })
        resetPermission(state)
    },

    CONNECTOR_TOGGLE (state, connector, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[4].teeth.b, { id: connector })
        state.questions[4].teeth.b[teethIndex].selected = state.questions[4].teeth.b[teethIndex].selectable ? newStatus : false
    },

    CLASP_TOGGLE (state, clasp, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[8 - 1].teeth.b, { id: clasp })
        state.questions[8 - 1].teeth.b[teethIndex].selected = state.questions[8 - 1].teeth.b[teethIndex].selectable ? newStatus : false
    },

    VITALITY_TOGGLE (state, vitality, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[10 - 1].teeth, { id: vitality })
        state.questions[10 - 1].teeth[teethIndex].selected = state.questions[10 - 1].teeth[teethIndex].selectable ? newStatus : false
    },

    SELECT_SHOW_TOGGLE4(state, teeth, newStatus) {
        let teethIndex = _.findKey(state.questions[4].teeth.a, { id: teeth} )
        if (state.questions[4].teeth.a[teethIndex].selected == 'P') {
            state.questions[4].teeth.a[teethIndex].selectShow = (newStatus ? { p: false, m: true} : { p: false, m: false})
        } else if (state.questions[4].teeth.a[teethIndex].selected == 'M') {
            state.questions[4].teeth.a[teethIndex].selectShow = (newStatus ? { p: true, m: false} : { p: false, m: false})
        } else {
            state.questions[4].teeth.a[teethIndex].selectShow = (newStatus ? { p: true, m: true} : { p: false, m: false})
        }
    },

    SELECT_SHOW_TOGGLE10(state, teeth, newStatus) {
        let teethIndex = _.findKey(state.questions[10 - 1].teeth, { id: teeth} )
        let teethObj = state.questions[10 - 1].teeth[teethIndex]
        switch (teethObj.selected) {
            case 'circle':
                teethObj.selectShow = newStatus ? {
                    times: true,
                    triangle: true
                } : {
                    times: false,
                    triangle: false
                }
                break
            case 'times':
                teethObj.selectShow = newStatus ? {
                    times: false,
                    triangle: true
                } : {
                    times: false,
                    triangle: false
                }
                break
            case 'triangle':
                teethObj.selectShow = newStatus ? {
                    times: true,
                    triangle: false
                } : {
                    times: false,
                    triangle: false
                }
                break
            default:
                teethObj.selectShow = newStatus ? {
                    times: true,
                    triangle: true
                } : {
                    times: false,
                    triangle: false
                }
                break
        }
    },
    SELECT_SHOW_TOGGLE8(state, teeth, newStatus) {
        let teethIndex = _.findKey(state.questions[8 - 1].teeth.b, { id: teeth} )
        let teethObj = state.questions[8 - 1].teeth.b[teethIndex]
        switch (teethObj.selected) {
            case 'A':
                teethObj.selectShow = newStatus ? {
                    a: false,
                    w: true,
                    i: true
                } : {
                    a: false,
                    w: false,
                    i: false
                }
                break
            case 'W':
                teethObj.selectShow = newStatus ? {
                    a: true,
                    w: false,
                    i: true
                } : {
                    a: false,
                    w: false,
                    i: false
                }
                break
            case 'I':
                teethObj.selectShow = newStatus ? {
                    a: true,
                    w: true,
                    i: false
                } : {
                    a: false,
                    w: false,
                    i: false
                }
                break
            default:
                teethObj.selectShow = newStatus ? {
                    a: true,
                    w: true,
                    i: true
                } : {
                    a: false,
                    w: false,
                    i: false
                }
                break
        }
    },
    ABOUT_SHOW(state) {
        state.aboutShow = !state.aboutShow
    },
    HOW_TO_USE_SHOW(state) {
        state.howToUseShow = !state.howToUseShow
    }
};

function jsonLog(obj) {
    console.log(JSON.parse(JSON.stringify(obj)))
}

export default new Vuex.Store({
    state,
    mutations
})
