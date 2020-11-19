import React from 'react'
import Form from 'react-bootstrap/Form'

const Input = (props) => {
    return (
        <Form.Control 
        className="mb-2"
        type={props.type} 
        placeholder={props.placeholder} />
    )
}

export default Input