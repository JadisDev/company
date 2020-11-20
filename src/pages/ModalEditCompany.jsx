import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from './../components/Button'
import FormCompany from './../pages/FormCompany'

const ModalEditCompany = (props) => {

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "440px"}}>
                    <FormCompany action="Alterar" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalEditCompany