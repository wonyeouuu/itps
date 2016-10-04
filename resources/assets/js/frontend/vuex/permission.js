export const pivot = () => {
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
export const resetPermission = state => {
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
        state.questions[8 - 1].teeth.a
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
    state.questions[8 - 1].teeth.a.forEach(tooth => {
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

export const resetClasp = state => {
    state.questions[8 - 1].teeth.b.forEach(clasp => {
        clasp.selected = false
    })
}

export const resetConnector = state => {
    state.questions[5 - 1].teeth.b.forEach(connector => {
        connector.selected = false
    })
}
