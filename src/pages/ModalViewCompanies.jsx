import React from 'react'
import Modal from 'react-bootstrap/Modal'
import MapContainer from './../components/Map'

const ModalShowCompanies = (props) => {

    return (
        <div>
            <Modal show={props.showNewModal} onHide={props.handleNewClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "600px", width:"780px"}}>
                    <MapContainer list={true} lat={1} lng={1} heigth="90%" ></MapContainer>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalShowCompanies