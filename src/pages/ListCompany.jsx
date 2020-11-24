import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Button from '../components/Button'
import ModalEditCompany from './ModalEditCompany'
import ModalSaveCompany from './ModalNewCompany'
import ModalViewCompany from './ModalViewCompanies'
import { connect } from 'react-redux'
import { logout } from '../auth/authAction'
import User from '../components/User'
import consts from '../const'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { deleteCompany, getCompanyByCNPJ, getCompanyDefault } from '../company/companyAction'

const ListCompany = (props) => {

    const [companies, setCompanies] = useState(1);

    useEffect(() => {
        loadCompanies()
        // return () => {} executa ao desmontar o componente
    }, [props.companies]);

    function loadCompanies() {
        axios.get(`${consts.API_URL}/company`)
            .then(resp => {
                setCompanies(resp.data.data)
            })
            .catch(e => {
                toastr.error('Nova empresa', e.message)
            })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showNewModal, setNewModal] = useState(false);
    const handleNewClose = () => setNewModal(false);
    const handleNewShow = () => setNewModal(true);

    const [showMapModal, setMapModal] = useState(false);
    const handleShowMapModalClose = () => setMapModal(false);
    const handleShowMapModalShow = () => setMapModal(true);

    const newCompany = () => {
        props.dispatchCompanyDefault(handleNewShow)
    }

    const editCompany = (cnpj) => {
        console.warn(cnpj);
        props.dispatchGetCompany(cnpj, handleShow)
    }

    const removeCompany = (cnpj) => {
        props.dispatchRemoveCompany(cnpj)
    }

    function seeCompaniesMap() {
        handleShowMapModalShow()
    }

    const columns = [
        {
            name: 'Empresa',
            selector: 'name',
        },
        {
            name: 'CNPJ',
            selector: 'cnpj',
        },
        {
            name: 'Editar',
            button: true,
            cell: row => <div key={row._id}>
                <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    action={() => editCompany(row.cnpj)}
                    name="Editar"
                >
                </Button>
            </div>
        },
        {
            name: 'Remover',
            button: true,
            cell: row => <div key={row._id}>
                <Button
                    type="button"
                    variant="danger"
                    size="sm" getCompanies
                    action={() => removeCompany(row.cnpj)}
                    name="Remover"
                >showMapModal
                </Button>
            </div>
        }
    ];

    return (
        <div>

            <User></User>

            <div className="d-flex justify-content-end">
                <div className="p-2 col-example text-left">
                    <Button
                        type="button"
                        variant="success"
                        size="sm"
                        action={() => newCompany()}
                        name="Adicionar nova empresa"
                        style={{}}
                    >

                    </Button>
                </div>
                <div className="p-2 col-example text-left">
                    <Button
                        type="button"
                        variant="warning"
                        size="sm"
                        action={() => seeCompaniesMap()}
                        name="Mapa"
                        style={{}}
                    >

                    </Button>
                </div>
                <div className="p-2 col-example text-left">
                    <Button
                        type="button"
                        variant="danger"
                        size="sm"
                        action={() => props.dispatchLogout()}
                        name="Logout"
                        style={{}}
                    >
                    </Button>
                </div>
            </div>

            <DataTable
                title="Lista - Empresas"
                columns={columns}
                data={companies}
                pagination
            />

            <ModalEditCompany
                show={show}
                handleClose={handleClose}
                title="Editar - Empresa"
            />

            <ModalSaveCompany
                showNewModal={showNewModal}
                handleNewClose={handleNewClose}
                title="Cadastrar nova empresa"
            />

            <ModalViewCompany
                showNewModal={showMapModal}
                handleNewClose={handleShowMapModalClose}
                title="Mapa de empresas"
            />

        </div>
    )
}

function mapStateToProps(state) {
    return {
        companies: state.companies
    }
}

function mapDispatchProp(dispatch) {
    return {
        dispatchLogout() {
            const actionLogin = logout()
            dispatch(actionLogin)
        },
        dispatchRemoveCompany(cnpj) {
            const actionRemove = deleteCompany(cnpj)
            dispatch(actionRemove)
        },
        dispatchGetCompany(cnpj, action) {
            const actionGetCompany = getCompanyByCNPJ(cnpj, action)
            dispatch(actionGetCompany)
        },
        dispatchCompanyDefault(action) {
            const actionCompanyDefault = getCompanyDefault(action)
            dispatch(actionCompanyDefault)
        }
    }
}

export default connect(mapStateToProps, mapDispatchProp)(ListCompany)