import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';
import Address from '../components/Address'
import {connect} from 'react-redux'
import {saveCompany} from '../company/companyAction'

const FormCompany = (props) => {

    const schema = yup.object({
        name: yup.string().min(3, 'Nome muito curto').required('Obrigatório'),
        cnpj: yup.string().required('Obrigatório').min(14, 'cnpj deve ter 14 caracters').max(14, 'cnpj deve ter 14 caracters')
    });

    console.log(props.companies.companies)
    const {cnpj, name} = props.companies.companies
    const lat_edit = props.companies.companies.lat || null
    const lng_edit = props.companies.companies.lng || null

    console.log(cnpj, name)

    const {lat, lng} = props

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={values => {
                    // values['lat'] = lat
                    // values['lng'] = lng
                    values['lat'] = 1
                    values['lng'] = 1
                    props.dispatchSaveCompany(values)
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
                                            value={name || values.name}
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
                                            placeholder="Informe o cnpj da empresa"
                                            name="cnpj"
                                            onChange={handleChange}
                                            isValid={touched.cnpj && !errors.cnpj}
                                            isInvalid={!!errors.cnpj}
                                            value={cnpj || values.cnpj}
                                            companies   >
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

function mapStateToProp(state) {
    return {
        lat: state.coordenate.lat,
        lng: state.coordenate.lng,
        companies: state.companies
    }
}

function mapsDipatchToProp (dispatch) {
    return {
        dispatchSaveCompany(values) {
            const actioSaveCompany = saveCompany(values)
            dispatch(actioSaveCompany)
        }
    }
}

export default connect(mapStateToProp, mapsDipatchToProp)(FormCompany)