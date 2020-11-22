import { combineReducers } from 'redux'
import authReducer from './reduce/authReducer'
import coordenateReducer from './reduce/coordinateReduce'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    auth: authReducer,
    coordenate: coordenateReducer,
    toastr: toastrReducer,
    form: formReducer
})

export default reducers