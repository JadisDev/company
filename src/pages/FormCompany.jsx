import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';
import MapContainer from '../components/Map'
import Address from '../components/Address'

const FormCompany = (props) => {

    const schema = yup.object({
        name: yup.string().min(3, 'Nome muito curto').required('Obrigatório'),
        cnpj: yup.string().required('Obrigatório').min(14, 'cnpj deve ter 14 caracters').max(14, 'cnpj deve ter 14 caracters')
    });

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
                initialValues={{
                    name: '',
                    cnpj: '',
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
                        <div>
                            <Form noValidate onSubmit={handleSubmit}>                                
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                                        <Label label="Empresa" />
                                        <Input
                                            type="text"
                                            placeholder="Informe nome da empresa"
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
                                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                                        <Label label="CNPJ" />
                                        <Input
                                            type="text"
                                            placeholder="Informe seu login"
                                            name="cnpj"
                                            onChange={handleChange}
                                            isValid={touched.cnpj && !errors.cnpj}
                                            isInvalid={!!errors.cnpj}
                                            value={values.cnpj}
                                        >
                                        </Input>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.cnpj}
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="12" controlId="validationFormik104" style={{"heigth": "600px"}}>
                                        <Label label="Onde esta sua empresa?" />
                                        <Address></Address>
                                    </Form.Group>
                                </Form.Row>
                                <Button
                                    type="submit"
                                    variant="success"
                                    size="lg"
                                    action={() => { }}
                                    name={props.action}
                                    style={{ "marginTop": "250px" }}
                                >
                                </Button>
                            </Form>
                        </div>
                    )}
            </Formik>
        </div>
    )
}

export default FormCompany