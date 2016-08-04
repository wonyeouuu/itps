export const getTeethWithQuestion = (state, question) => state.questions[question - 1].teeth
export const getQuestions = (state) => state.questions

export const getAboutShow = (state) => state.aboutShow

export const getActiveGraphController = (state) => state.activeGraphController
// export const getTeethWithQuestion = (state, question) => state.questions[0].teeth
