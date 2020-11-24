import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../const'
import { INITIAL_COORDENATE, COMPANIES, COMPANY_EDITE } from '../store/action/actionsType'


export function updateCompany(values) {

    return dispatch => {
        axios.put(`${consts.API_URL}/company`, values)
            .then(resp => {
                console.log(resp)
                toastr.success('Dados atualizados com sucesso', 'Todos os dados foram atualizados')
                dispatch({ type: INITIAL_COORDENATE, payload: {} })
                dispatch({ type: COMPANIES, payload: true })
            })
            .catch(e => {
                console.log(e);
                toastr.error('Nova empresa', 'Erro ao atualizar uma nova empresa')
            })
    }
}

export function saveCompany(values) {

    return dispatch => {
        axios.post(`${consts.API_URL}/company`, values)
            .then(resp => {
                console.log(resp)
                toastr.success('Nova empresa', 'Todos os dados foram salvos com sucesso')
                dispatch({ type: INITIAL_COORDENATE, payload: {} })
                dispatch({ type: COMPANIES, payload: true })
            })
            .catch(e => {
                console.log(e);
                toastr.error('Nova empresa', 'Erro ao cadastrar uma nova empresa')
            })
    }
}

export function getCompanies() {
    return dispatch => {
        axios.get(`${consts.API_URL}/company`)
            .then(resp => {
                console.log(resp)
                dispatch({ type: COMPANIES, payload: {} })
            })
            .catch(e => {
                console.log(e);
                toastr.error('Nova empresa', 'Erro ao recuperar a lista de empresas')
            })
    }
}

export function deleteCompany(cnpj) {
    return dispatch => {
        axios.delete(`${consts.API_URL}/company/${cnpj}`)
            .then(resp => {
                console.log(resp)
                dispatch({ type: COMPANIES, payload: { 'delete': true } })
            })
            .catch(e => {
                console.log(e);
                toastr.error('Nova empresa', 'Erro ao remover a empresa')
            })
    }
}

export function getCompanyByCNPJ(cnpj, action) {
    return dispatch => {
        axios.get(`${consts.API_URL}/company/${cnpj}`)
            .then(resp => {
                dispatch({ type: COMPANY_EDITE, payload: resp.data.data })
                action()
            })
            .catch(e => {
                console.log(e);
                toastr.error('Nova empresa', 'Erro ao carregar a empresa')
            })
    }
}

export function getCompanyDefault(action) {
    return dispatch => {
        dispatch({
            type: COMPANY_EDITE, payload: {
                cnpj: '',
                name: '',
                lat: 1,
                lng: 1
            }
        })
        action()
    }
}