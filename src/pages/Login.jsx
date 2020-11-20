import React from 'react'
import { useHistory } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"

import Label from '../components/Label'
import Input from '../components/Input'

import Button from '../components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';

const Login = (props) => {

    const history = useHistory()

    const schema = yup.object({
        username: yup.string().min(3, 'Login muito curto').required('Obrigatório'),
        password: yup.string().min(3, 'Senha muito curto').required('Obrigatório'),
    });


    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            initialValues={{
                username: '',
                password: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                    <div className="d-flex justify-content-center">
                        <Form noValidate onSubmit={handleSubmit}>
                            <h1 className="d-flex justify-content-center">Login sistema</h1>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik101">
                                    <Label label="Login" />
                                    <Input
                                        type="text"
                                        placeholder="Informe seu login"
                                        name="username"
                                        onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={!!errors.username}
                                        value={values.username}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationFormik102">
                                    <Label label="Senha" />
                                    <Input
                                        type="password"
                                        placeholder="***"
                                        name="password"
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={!!errors.password}
                                        value={values.password}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button
                                type="submit"
                                variant="outline-primary"
                                size="lg"
                                action={() => { }}
                                name="Logar"
                            >
                            </Button>
                            <hr></hr>
                            <Button
                                type="buttom"
                                variant="outline-success"
                                size="lg"
                                action={() => history.push('/signup')}
                                name="Cadastrar-se"
                            >
                            </Button>
                        </Form>
                    </div>
                )}
        </Formik>
    )
}

export default Login