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
        state.questions = []
        let questions = [
            'CD(Upper, Lower) 全口假牙 要上或下全部沒有才可以',

            //if cd, just IR
            'Implant 植體',
            'Missing Teeth 缺牙',//1, 2, 3合併 if not cd
            'Residual Roots 殘根 牙冠爛掉 剩牙根',

            'Fixed Partial Denture 固定假牙',//P M, crown first, then connector
            'Veneer 陶瓷貼片',
            'Post 差一根到牙根裡',
            'RPD(Upper, Lower) 活動假牙',//不用選 只有開關 會出現另一種顏色補齊沒有牙冠的地方

            'Caries 有真的牙齒冠才會有 蛀牙',
            'Apical Lesion 牙根蛀出球 要有牙根才可以選',
            'Periodontal Chart 牙周表格'//圖像才有
            //四階段 階段間有皮卡丘
        ]
        //mobility 牙齒移動程度 搖晃程度 三級 123
        //furcation 洞洞露出多寡 三級 123
        //BOP 插了進去流血多少 三個點
        //plague 牙菌斑 三個點
        //GM 牙齦高度 看外觀 1~15 >5 red
        //PD 插進去多深 1~15 >5 red
        questions.forEach((question, number) => {
            if (number == 4) {
                state.questions.push({
                    teeth: teethArr4(),
                    tableShow: false,
                    number: number + 1,
                    title: question
                })
            } else if (number == 10) {
                state.questions.push({
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
        console.log(state.questions.length)
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
    },

    TEETH_TOGGLE4 (state, teeth, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[4].teeth.a, { id: teeth })
        state.questions[4].teeth.a[teethIndex].selected = state.questions[4].teeth.a[teethIndex].selectable ? newStatus : false
    },

    CONNECTOR_TOGGLE (state, connector, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[4].teeth.b, { id: connector })
        state.questions[4].teeth.b[teethIndex].selected = state.questions[4].teeth.b[teethIndex].selectable ? newStatus : false
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
