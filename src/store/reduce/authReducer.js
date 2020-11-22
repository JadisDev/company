import {TOKEN_VALIDATED, USER_FETCHED} from '../action/actionsType'

const userKey = '_company_user'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_VALIDATED:

            console.log('TOKEN_VALIDATED', action.payload)
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case USER_FETCHED:
            console.log('USER_FETCHED', action.payload)
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}