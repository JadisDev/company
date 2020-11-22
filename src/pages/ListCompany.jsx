import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Button from '../components/Button'
import ModalEditCompany from './ModalEditCompany'
import ModalSaveCompany from './ModalNewCompany'
import {connect} from 'react-redux'
import { logout } from '../auth/authAction'
import { propTypes } from 'react-bootstrap/esm/Image';


const ListCompany = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showNewModal, setNewModal] = useState(false);
    const handleNewClose = () => setNewModal(false);
    const handleNewShow = () => setNewModal(true);

    const newCompany = () => {
        handleNewShow();
    }

    const editCompany = (id) => {
        handleShow();
        console.warn(id);
    }

    const removeCompany = (id) => {
        console.warn(id);
    }

    const mapCompany = (id) => {
        console.warn(id);
    }

    const columns = [
        {
            name: 'Empresa',
            selector: 'company',
        },
        {
            name: 'CNPJ',
            selector: 'cnpj',
        },
        {
            name: 'Editar',
            button: true,
            cell: row => <div key={row.id}>
                <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    action={() => editCompany(row.id)}
                    name="Editar"
                >
                </Button>
            </div>
        },
        {
            name: 'Remover',
            button: true,
            cell: row => <div key={row.id}>
                <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    action={() => removeCompany(row.id)}
                    name="Remover"
                >
                </Button>
            </div>
        },
        {
            name: 'Mapa',
            button: true,
            cell: row => <div key={row.id}>
                <Button
                    type="button"
                    variant="warning"
                    size="sm"
                    action={() => mapCompany(row.id)}
                    name="Mapa"
                >
                </Button>
            </div>
        },
    ];

    const data = [
        { "company": "Empresa tal", "cnpj": "12312312312312", "id": 1 },
        { "company": "Empresa tal", "cnpj": "12312312312312", "id": 2 },
        { "company": "Empresa tal", "cnpj": "12312312312312", "id": 3 }
    ]

    return (
        <div>

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
                data={data}
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

        </div>
    )
}

function mapDispatchProp(dispatch) {
    return {
        dispatchLogout() {
            const actionLogin = logout()
            dispatch(actionLogin)
        }
    }
}

export default connect(null, mapDispatchProp)(ListCompany)