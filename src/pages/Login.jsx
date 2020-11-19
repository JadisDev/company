import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"

import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <Form>
                <Row>
                    <Col xs="12">
                        <h1>Login sistema</h1>
                        <Label label="Login" />
                        <Input
                            type="text"
                            placeholder="Informe seu login">
                        </Input>

                        <Label label="Senha" />
                        <Input
                            type="password"
                            placeholder="*******">
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button
                            variant="outline-primary"
                            type="submit"
                            name="Logar"
                            size="lg"
                        />
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col xs="12">
                        <Button
                            variant="outline-success"
                            type="button"
                            name="Cadastra-se"
                            size="lg"
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Login