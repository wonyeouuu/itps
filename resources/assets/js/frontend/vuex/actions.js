export const init = ({ dispatch }) => dispatch('INIT')
export const tableShowToggle = ({ dispatch }, number) => dispatch('TABLESHOW_TOGGLE', number)
export const teethToggle = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE', number, teeth, newStatus)

