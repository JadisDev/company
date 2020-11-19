import React from 'react';
import {useHistory} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"

import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

// import { Container } from './styles';

const SiginUp = (props) => {

  const history = useHistory()

    return (
        <div className="d-flex justify-content-center">
            <Form>
                <Row>
                    <Col xs="12">
                        <h1>Cadastro</h1>
                        <Label label="Nome do usuário" />
                        <Input
                            type="text"
                            placeholder="Informe seu nome">
                        </Input>

                        <Label label="Email" />
                        <Input
                            type="text"
                            placeholder="Informe seu e-mail">
                        </Input>

                        <Label label="Senha" />
                        <Input
                            type="password"
                            placeholder="*******">
                        </Input>

                        <Label label="Confirmar senha" />
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
                            name="Cadastrar"
                            size="lg"
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SiginUp