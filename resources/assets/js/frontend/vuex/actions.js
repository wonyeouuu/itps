export const init = ({ dispatch }) => dispatch('INIT')
export const tableShowToggle = ({ dispatch }, number) => dispatch('TABLESHOW_TOGGLE', number)
export const teethToggle = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE', number, teeth, newStatus)
export const teethToggle4 = ({ dispatch }, teeth, newStatus) => dispatch('TEETH_TOGGLE4', teeth, newStatus)
export const connectorToggle = ({ dispatch }, connector, newStatus) => dispatch('CONNECTOR_TOGGLE', connector, newStatus)

