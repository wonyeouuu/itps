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
        questions.forEach((question, number) => {
            if (number == 3) {
                state.questions.push({
                    teeth: teethArr4(),
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

    TABLESHOW_TOGGLE (state, number) {
        "use strict";
        state.questions[_.findKey(state.questions, {number})].tableShow = !state.questions[_.findKey(state.questions, {number})].tableShow 
    },
    
    TEETH_TOGGLE (state, number, teeth, newStatus) {
        "use strict";
        let questionIndex = _.findKey(state.questions, {number})
        let teethIndex = _.findKey(state.questions[questionIndex].teeth, { id: teeth })
        state.questions[questionIndex].teeth[teethIndex].selected = state.questions[questionIndex].teeth[teethIndex].selectable ? newStatus : false
    }

};

function teethArr() {
    "use strict";
    let teeth = [];
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.push({
                id: `${digit10}${digit1}`,
                selected: false,
                selectable: true
            })
        })
    })
    return teeth
}

function teethArr4() {
    "use strict";
    let teeth = {
        a: [],
        b: []
    }
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.a.push({
                id: `${digit10}${digit1}`,
                selected: false,//can be true, p, m
                selectable: true
            })
        })
    })

    let a = [35, 33, 31, 29, 27, 25, 23, 32, 43, 45, 47, 49, 51, 53, 55, 95, 93, 91, 89, 87, 85, 83, 72, 63, 65, 67, 69, 71, 73, 75];
    a.forEach(function(number) {
        teeth.b.push({
            id: number,
            selected: false,
            selectable: true
        })
    })
    return teeth
}

export default new Vuex.Store({
    state,
    mutations
})


