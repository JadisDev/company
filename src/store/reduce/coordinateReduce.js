import { COORDENATE, INITIAL_COORDENATE } from '../action/actionsType'

const INITIAL_STATE = {
    lat: 0,
    lng: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COORDENATE:
            return {
                ...state,
                lat: action.payload.lat,
                lng: action.payload.lng
            }
        case INITIAL_COORDENATE:
            return INITIAL_STATE
        default:
            return state
    }
}