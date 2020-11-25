import React from 'react'
import Modal from 'react-bootstrap/Modal'
import FormCompany from './../pages/FormCompany'

const ModalSaveCompany = (props) => {

    return (
        <div>
            <Modal show={props.showNewModal} onHide={props.handleNewClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{}}>
                    <FormCompany action="Cadastrar nova empresa" readOnly={false} onHide={props.handleNewClose}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalSaveCompany