import { COMPANIES, COMPANY_EDITE } from '../action/actionsType'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        case COMPANY_EDITE:
            return {
                ...state,
                companies: action.payload
            }
        default:
            return INITIAL_STATE
    }
}