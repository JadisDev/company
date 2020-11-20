import React, { useState }  from 'react'
import DataTable from 'react-data-table-component';
import Button from '../components/Button'
import ModalEditCompany from './ModalEditCompany'

const ListCompany = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const edit = (id) => {
        handleShow();
        console.warn(id);
    }

    const remove = (id) => {
        console.warn(id);
    }

    const map = (id) => {
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
                    action={() => edit(row.id)}
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
                    action={() => remove(row.id)}
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
                    action={() => map(row.id)}
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
        </div>
    )
}

export default ListCompany