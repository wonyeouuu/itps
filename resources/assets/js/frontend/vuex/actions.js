export const init = ({ dispatch }) => dispatch('INIT')
export const tableShowToggle = ({ dispatch }, number) => dispatch('TABLESHOW_TOGGLE', number)
export const connectorToggle = ({ dispatch }, connector, newStatus) => dispatch('CONNECTOR_TOGGLE', connector, newStatus)
export const claspToggle = ({ dispatch }, clasp, newStatus) => dispatch('CLASP_TOGGLE', clasp, newStatus)
export const vitalityToggle = ({ dispatch }, vitality, newStatus) => dispatch('VITALITY_TOGGLE', vitality, newStatus)
export const teethToggle = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE', number, teeth, newStatus)
export const teethToggle4 = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE4', number, teeth, newStatus)
export const teethToggle8 = ({ dispatch }, number, teeth, newStatus) => dispatch('TEETH_TOGGLE8', number, teeth, newStatus)
export const selectShowToggle4 = ({ dispatch }, teeth, newStatus) => dispatch('SELECT_SHOW_TOGGLE4', teeth, newStatus)
export const selectShowToggle8 = ({ dispatch }, teeth, newStatus) => dispatch('SELECT_SHOW_TOGGLE8', teeth, newStatus)
export const selectShowToggle10 = ({ dispatch }, teeth, newStatus) => dispatch('SELECT_SHOW_TOGGLE10', teeth, newStatus)

export const setExportCanvas = ({ dispatch }, canvas) => dispatch('SET_EXPORT_CANVAS', canvas)
export const save = ({ dispatch }) => dispatch('SAVE')
export const load = ({ dispatch }, index) => dispatch('LOAD', index)

export const aboutShowToggle = ({ dispatch }) => dispatch('ABOUT_SHOW')
export const howToUseShowToggle = ({ dispatch }) => dispatch('HOW_TO_USE_SHOW')

export const setGraphController = ({ dispatch }, newStatus, dashed) => {
    if (newStatus === 'Reset all settings') {
        dispatch('INIT')
    } else {
        dispatch('SET_GRAPH_CONTROLLER', newStatus, dashed)
    }
}
export const setGraphSlider = ({ dispatch }, newStatus) => dispatch('SET_GRAPH_SLIDER', newStatus)
export const graphConnectorToggle = ({ dispatch }, activeGraphController, connector) => {
    if (['Connector', 'A Bar', 'I Bar', 'Wrought wire'].indexOf(activeGraphController) === -1) {
        return false
    }
    switch(activeGraphController) {
        case 'Connector':
            dispatch('CONNECTOR_TOGGLE', connector)
            break
        case 'A Bar':
            dispatch('CLASP_TOGGLE', connector, 'A')
            break
        case 'I Bar':
            dispatch('CLASP_TOGGLE', connector, 'I')
            break
        case 'Wrought wire':
            dispatch('CLASP_TOGGLE', connector, 'W')
            break
        default:
            alert('Invalid graph controller')
            break
    }
}
export const graphTeethToggle = ({ dispatch }, activeGraphController, toothID) => {
    switch(activeGraphController) {
        case 'Complete Dentures':
            dispatch('TEETH_TOGGLE', 1, toothID)
            break
        case 'Implants':
            dispatch('TEETH_TOGGLE', 2, toothID)
            break
        case 'Missing Teeth':
            dispatch('TEETH_TOGGLE', 3, toothID)
            break
        case 'Retained Roots':
            dispatch('TEETH_TOGGLE', 4, toothID)
            break
        case 'Procelain':
            dispatch('TEETH_TOGGLE4', toothID, 'P')
            break
        case 'Metal':
            dispatch('TEETH_TOGGLE4', toothID, 'M')
            break
        case 'Veneer':
            dispatch('TEETH_TOGGLE', 6, toothID)
            break
        case 'Post':
            dispatch('TEETH_TOGGLE', 7, toothID)
            break
        case 'Denture Bases':
            dispatch('TEETH_TOGGLE8', toothID)
            break
        case 'Decayed Teeth':
            dispatch('TEETH_TOGGLE', 9, toothID)
            break
        case 'Vital':
            dispatch('VITALITY_TOGGLE', toothID, false)
            break
        case 'Endodontic treated':
            dispatch('VITALITY_TOGGLE', toothID, 'triangle')
            break
        case 'Necrosis':
            dispatch('VITALITY_TOGGLE', toothID, 'times')
            break
        default:
            return false
            break
    }
}
