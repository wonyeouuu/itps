export const getTeethWithQuestion = (state, question) => state.questions[question - 1].teeth
export const getQuestions = (state) => state.questions

export const getAboutShow = (state) => state.aboutShow
export const getHowToUseShow = (state) => state.howToUseShow

export const getActiveGraphController = (state) => state.activeGraphController
export const getGraphControllers = state => state.graphControllers
export const getGraphSlider = state => state.activeGraphSlider
export const getQuestionMarks = state => state.questionMarks

export const getQuestionNames = state => state.questionNames
// export const getTeethWithQuestion = (state, question) => state.questions[0].teeth
