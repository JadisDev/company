import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Login from '../pages/Login'
import { validateToken } from '../auth/authAction'
import ListCompany from '../pages/ListCompany'

class AuthOrApp extends Component {

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.dispatchValidateToken(this.props.auth.user.token)
        }
    }
    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            console.log(user.token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
            return <ListCompany></ListCompany>
        } else if (!user && !validToken) {
            return <Login />
        } else {
            return false
        }
    }
}

function mapToStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchProp(dispatch) {
    return {
        dispatchValidateToken(token) {
            const actionValidateToken = validateToken(token)
            dispatch(actionValidateToken)
        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(AuthOrApp)