import React from 'react'
import ButtonBS from 'react-bootstrap/Button'

const Button = (props) => {
    return (
        <ButtonBS
            variant={props.variant}
            type={props.type}
            size={props.size}
            block
        >
            {props.name}
        </ButtonBS>
    )
}

export default Button