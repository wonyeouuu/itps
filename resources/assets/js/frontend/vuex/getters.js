import range from 'lodash/range'
export const getTeethWithQuestion = (state, question) => state.questions[question - 1].teeth
export const getQuestions = (state) => state.questions

export const getAboutShow = (state) => state.aboutShow
export const getHowToUseShow = (state) => state.howToUseShow

export const getActiveGraphController = (state) => state.activeGraphController
export const getGraphControllers = state => state.graphControllers
export const getGraphSlider = state => state.activeGraphSlider
export const getQuestionMarks = state => state.questionMarks

export const getExportCanvas = state => state.exportCanvas

export const getQuestionNames = state => state.questionNames
export const getSelectable = state => {
    const selectableMapper = (carry, tooth) => {
        carry[tooth.id] = tooth.selectable
        return carry
    }
    const defaultSelectable = {}
    range(1, 5).forEach(digit10 => {
        range(1, 9).forEach(digit1 => {
            defaultSelectable[`${digit10}${digit1}`] = true
        })
    })
    switch(state.activeGraphController) {
        case 'Complete Dentures':
            return state.questions[1 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Implants':
            return state.questions[2 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Missing Teeth':
            return state.questions[3 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Retained Roots':
            return state.questions[4 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Procelain':
            return state.questions[5 - 1].teeth.a.reduce(selectableMapper, {})
            break
        case 'Metal':
            return state.questions[5 - 1].teeth.a.reduce(selectableMapper, {})
            break
        case 'Connector':
            return state.questions[5 - 1].teeth.b.reduce(selectableMapper, {})
            break
        case 'Veneer':
            return state.questions[6 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Post':
            return state.questions[7 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Denture Bases':
            return state.questions[8 - 1].teeth.a.reduce(selectableMapper, {})
            break
        case 'A Bar':
            return state.questions[8 - 1].teeth.b.reduce(selectableMapper, {})
            break
        case 'I Bar':
            return state.questions[8 - 1].teeth.b.reduce(selectableMapper, {})
            break
        case 'Wrought wire':
            return state.questions[8 - 1].teeth.b.reduce(selectableMapper, {})
            break
        case 'Decayed Teeth':
            return state.questions[9 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Vital':
            return state.questions[10 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Endodontic treated':
            return state.questions[10 - 1].teeth.reduce(selectableMapper, {})
            break
        case 'Necrosis':
            return state.questions[10 - 1].teeth.reduce(selectableMapper, {})
            break
        default:
            return defaultSelectable
            break
    }
}
