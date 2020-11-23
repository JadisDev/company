import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../const'
import { INITIAL_COORDENATE, COMPANIES } from '../store/action/actionsType'
import { useCallback } from 'react'

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
            toastr.error('Nova empresa', 'Erro ao cadastrar uma nova empresa')
        })
    }
}

export function getCompanies(callback) {
    // return dispatch => {
        axios.get(`${consts.API_URL}/company`)
        .then(resp => {
            return resp.data.data
        })
        .catch(e => {
            console.log(e);
            toastr.error('Nova empresa', 'Erro ao recuperar a lista de empresas')
        })
    // }
}