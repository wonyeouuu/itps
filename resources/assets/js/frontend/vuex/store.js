import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'underscore'

Vue.use(Vuex);

const state = {
    questions: []
};

const mutations = {
    INIT (state) {
        "use strict";
        let questions = [
            'Implant',
            'Missing Teeth',
            'Residual Roots',
            'Fixed Partial Denture',
            'Post',
            'Veneer',
            'RPD(Upper, Lower)',
            'CD(Upper, Lower)',
            'Caries',
            'Apical Lesion',
            'Periodontal Chart'
        ]
        // _.range(1, 12).forEach((question) => {
        questions.forEach((question, number) => {
            state.questions.push({ 
                teeth: teethArr(),
                tableShow: false,
                number: number + 1,
                title: question
            })
        })
    },

    TABLESHOW_TOGGLE (state, number) {
        "use strict";
        state.questions[_.findKey(state.questions, {number})].tableShow = !state.questions[_.findKey(state.questions, {number})].tableShow 
    },
    
    TEETH_TOGGLE (state, number, teeth, newStatus) {
        "use strict";
        console.log(number, teeth, newStatus)
        let questionIndex = _.findKey(state.questions, {number})
        let teethIndex = _.findKey(state.questions[questionIndex].teeth, { id: teeth })
        console.log(questionIndex)
        console.log(teethIndex)
        console.log(JSON.parse(JSON.stringify(state.questions[questionIndex].teeth[teethIndex])))
        state.questions[questionIndex].teeth[teethIndex].selected = newStatus
    }

};

function teethArr() {
    "use strict";
    let teeth = [];
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.push({
                id: `${digit10}${digit1}`,
                selected: false
            })
        })
    })
    return teeth
}

export default new Vuex.Store({
    state,
    mutations
})


