import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'underscore'

Vue.use(Vuex);

const state = {
    questions: [],
    aboutShow: false
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
            'Vitality 牙根蛀出球 要有牙根才可以選',
            //四階段 階段間有皮卡丘
        ]
        //mobility 牙齒移動程度 搖晃程度 三級 123
        //furcation 洞洞露出多寡 三級 123
        //BOP 插了進去流血多少 三個點
        //plague 牙菌斑 三個點
        //GM 牙齦高度 看外觀 1~15 >5 red
        //PD 插進去多深 1~15 >5 red
        questions.forEach((question, number) => {
            //NOTE: remember to modify tableShow back to false next part 2
            if (number == 4) {
                state.questions.push({
                    teeth: teethArr4(),
                    tableShow: true,
                    number: number + 1,
                    title: question
                })
            } else {
                state.questions.push({
                    teeth: teethArr(),
                    tableShow: true,
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
        // state.questions[questionIndex].teeth[teethIndex].selected = state.questions[questionIndex].teeth[teethIndex].selectable ? newStatus : false
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

    CONNECTOR_TOGGLE (state, connector, newStatus) {
        "use strict";
        let teethIndex = _.findKey(state.questions[4].teeth.b, { id: connector })
        state.questions[4].teeth.b[teethIndex].selected = state.questions[4].teeth.b[teethIndex].selectable ? newStatus : false
    },

    SELECT_SHOW_TOGGLE4(state, teeth, newStatus) {
        let teethIndex = _.findKey(state.questions[4].teeth.a, { id: teeth} )
        state.questions[4].teeth.a[teethIndex].selectShow = newStatus
    },

    ABOUT_SHOW(state, bool) {
        state.aboutShow = !state.aboutShow
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

function resetPermission(state) {
    const questionsList1 = state.questions.filter(question => {
        return [7].indexOf(question.number) != -1
    })
    const questionsList2 = state.questions.filter(question => {
        return [3, 4, 6, 7, 9, 10].indexOf(question.number) != -1
    })
    const questionsList3 = state.questions.filter(question => {
        return [1, 2, 4, 6, 7, 9, 10].indexOf(question.number) != -1
    })
    const questionsList4 = [
        state.questions[2 - 1].teeth,
        state.questions[3 - 1].teeth,
        state.questions[5 - 1].teeth.a,
        state.questions[6 - 1].teeth
    ]
    const questionsList5 = state.questions.filter(question => {
        return [1, 4, 6].indexOf(question.number) != -1
    })
    const questionsList6 = [
        state.questions[1 - 1].teeth,
        state.questions[2 - 1].teeth,
        state.questions[3 - 1].teeth,
        state.questions[4 - 1].teeth,
        state.questions[5 - 1].teeth.a,
        state.questions[8 - 1].teeth
    ]
    const questionsList7 = state.questions.filter(question => {
        return [1, 2, 3].indexOf(question.number) != -1
    })
    const questionsList8 = [
        state.questions[1 - 1].teeth,
        state.questions[5 - 1].teeth.a,
        state.questions[6 - 1].teeth
    ]
    const questionsList9 = state.questions.filter(question => {
        return [1, 2, 3].indexOf(question.number) != -1
    })
    const questionsList10 = state.questions.filter(question => {
        return [1, 2, 3].indexOf(question.number) != -1
    })
    state.questions[2 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList2.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[3 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList3.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[4 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList4.reduce((carry, teeth) => {
            return Boolean(carry || teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[5 - 1].teeth.a.forEach(tooth => {
        tooth.selectable = !questionsList5.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[6 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList6.reduce((carry, teeth) => {
            return Boolean(carry || teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[7 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList7.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[8 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList8.reduce((carry, teeth) => {
            return Boolean(carry || teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[9 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList9.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    state.questions[10 - 1].teeth.forEach(tooth => {
        tooth.selectable = !questionsList10.reduce((carry, question) => {
            return Boolean(carry || question.teeth[pivot()[tooth.id]].selected)
        }, false)
    })
    //special rules
    state.questions[7 - 1].teeth.forEach(tooth => {
        if (state.questions[1 - 1].teeth[pivot()[tooth.id]].selected && state.questions[4 - 1].teeth[pivot()[tooth.id]].selected) {
            tooth.selectable = true
        }
    })
    state.questions[9 - 1].teeth.forEach(tooth => {
        if (state.questions[1 - 1].teeth[pivot()[tooth.id]].selected && state.questions[4 - 1].teeth[pivot()[tooth.id]].selected) {
            tooth.selectable = true
        }
    })
    state.questions[10 - 1].teeth.forEach(tooth => {
        if (state.questions[1 - 1].teeth[pivot()[tooth.id]].selected && state.questions[4 - 1].teeth[pivot()[tooth.id]].selected) {
            tooth.selectable = true
        }
    })
}

function pivot() {
    return {
        '11': 0,
        '12': 1,
        '13': 2,
        '14': 3,
        '15': 4,
        '16': 5,
        '17': 6,
        '18': 7,
        '21': 8,
        '22': 9,
        '23': 10,
        '24': 11,
        '25': 12,
        '26': 13,
        '27': 14,
        '28': 15,
        '31': 16,
        '32': 17,
        '33': 18,
        '34': 19,
        '35': 20,
        '36': 21,
        '37': 22,
        '38': 23,
        '41': 24,
        '42': 25,
        '43': 26,
        '44': 27,
        '45': 28,
        '46': 29,
        '47': 30,
        '48': 31
    }
}

function jsonLog(obj) {
    console.log(JSON.parse(JSON.stringify(obj)))
}


function teethArrUnselectable() {
    "use strict";
    let teeth = [];
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.push({
                id: `${digit10}${digit1}`,
                selected: false,
                selectable: false
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
                selectable: true,
                selectShow: false
            })
        })
    })

    connectors().forEach(function(connector) {
        teeth.b.push({
            id: connector,
            selected: false,
            selectable: false
        })
    })
    return teeth
}

function connectors() {
    let connectors = [35, 33, 31, 29, 27, 25, 23, 32, 43, 45, 47, 49, 51, 53, 55, 95, 93, 91, 89, 87, 85, 83, 72, 63, 65, 67, 69, 71, 73, 75];
    return connectors
}

function connectorsSplit() {
    return [
        [18, 17],
        [17, 16],
        [16, 15],
        [15, 14],
        [14, 13],
        [13, 12],
        [12, 11],
        [11, 21],
        [21, 22],
        [22, 23],
        [23, 24],
        [24, 25],
        [25, 26],
        [26, 27],
        [27, 28],
        [48, 47],
        [47, 46],
        [46, 45],
        [45, 44],
        [44, 43],
        [43, 42],
        [42, 41],
        [41, 31],
        [31, 32],
        [32, 33],
        [33, 34],
        [34, 35],
        [35, 36],
        [36, 37],
        [37, 38]
    ]
}


export default new Vuex.Store({
    state,
    mutations
})
