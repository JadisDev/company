import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../const'
import { INITIAL_COORDENATE } from '../store/action/actionsType'

export function saveCompany(values) {

    return dispatch => {
        axios.post(`${consts.API_URL}/company`, values)
        .then(resp => {
            console.log(resp)
            toastr.success('Nova empresa', 'Todos os dados foram salvos com sucesso')
            dispatch({ type: INITIAL_COORDENATE, payload: {} })
        })
        .catch(e => {
            console.log(e);
            toastr.error('Nova empresa', 'Todos os dados foram salvos com sucesso')
        })
    }
}

export function getCompany() {

    return dispatch => {
        axios.get(`${consts.API_URL}/company`)
        .then(resp => {
            console.log(resp)
            dispatch({ type: INITIAL_COORDENATE, payload: {} })
        })
        .catch(e => {
            console.log(e);
            toastr.error('Nova empresa', 'Todos os dados foram salvos com sucesso')
        })
    }
}