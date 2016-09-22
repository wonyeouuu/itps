export const init = ({ dispatch }) => dispatch('INIT')
export const tableShowToggle = ({ dispatch }, number) => dispatch('TABLESHOW_TOGGLE', number)
export const connectorToggle = ({ dispatch }, connector, newStatus) => dispatch('CONNECTOR_TOGGLE', connector, newStatus)
export const teethToggle = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE', number, teeth, newStatus)
export const teethToggle4 = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE4', number, teeth, newStatus)
export const teethToggle8 = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE8', number, teeth, newStatus)
export const selectShowToggle4 = ({ dispatch }, teeth, newStatus) => dispatch('SELECT_SHOW_TOGGLE4', teeth, newStatus)
export const selectShowToggle8 = ({ dispatch }, teeth, newStatus) => dispatch('SELECT_SHOW_TOGGLE8', teeth, newStatus)


export const aboutShowToggle = ({ dispatch }) => dispatch('ABOUT_SHOW')
export const howToUseShowToggle = ({ dispatch }) => dispatch('HOW_TO_USE_SHOW')


export const setGraphController = ({ dispatch }, newStatus, dashed) => dispatch('SET_GRAPH_CONTROLLER', newStatus, dashed)
