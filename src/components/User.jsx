import React from 'react'
import {connect} from 'react-redux'

const User = (props) => {
    const {name, login} = props.user.user
    return (
        <div>
            <strong>Bem vindo(a): {name}</strong>
            <br></br>
            <span>Login: {login}</span>
        </div>
    )
}

function mapStateToProp(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProp)(User)