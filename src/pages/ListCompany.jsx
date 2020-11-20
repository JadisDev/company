import React from 'react'

import DataTable, { createTheme } from 'react-data-table-component';

const ListCompany = () => {

    const columns = [
        {
            name: 'First Name',
            selector: 'first_name',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'last_name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
    ];

    return (
        <DataTable
            title="Lista de empresas"
            columns={columns}
            data={[
                ['1', '2']
            ]}
        />
    )
}

export default ListCompany