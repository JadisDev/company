import React from 'react'
import Modal from 'react-bootstrap/Modal'
import FormCompany from './../pages/FormCompany'

const ModalEditCompany = (props) => {

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "510px"}}>
                    <FormCompany action="Alterar dados empresa" readOnly={true} onHide={props.handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalEditCompany