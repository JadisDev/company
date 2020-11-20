import React from 'react';
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"

import Label from '../components/Label'
import Input from '../components/Input'

import Button from '../components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';

// import { Container } from './styles';

const SiginUp = (props) => {

    const schema = yup.object({
        name: yup.string().min(3, 'Nome muito curto').required('Obrigatório'),
        username: yup.string().min(3, 'Login muito curto').required('Obrigatório'),
        password: yup.string().min(3, 'Senha muito curto').required('Obrigatório'),
        confirmPassword: yup.string()
                        .oneOf([yup.ref('password'), null], 'Senha não conferi')
                        .required('Confirmação da senha é obrigatória'),
    });


    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            initialValues={{
                name: '',
                username: '',
                password: '',
                confirmPassword: ''
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
                            <h1 className="d-flex justify-content-center">Cadastre-se</h1>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik103">
                                    <Label label="Nome" />
                                    <Input
                                        type="text"
                                        placeholder="Informe seu nome"
                                        name="name"
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                        value={values.name}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
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
                            </Form.Row>
                            <Form.Row>
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
                                <Form.Group as={Col} md="12" controlId="validationFormik102">
                                    <Label label="Confirmar senha" />
                                    <Input
                                        type="password"
                                        placeholder="***"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        isValid={touched.confirmPassword && !errors.confirmPassword}
                                        isInvalid={!!errors.confirmPassword}
                                        value={values.confirmPassword}                                    
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button
                                type="submit"
                                variant="success"
                                size="lg"
                                action={() => { }}
                                name="Cadastre-se"
                            >
                            </Button>
                        </Form>
                    </div>
                )}
        </Formik>
    )
}

export default SiginUp