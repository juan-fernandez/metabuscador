import React from "react"

import {Col, Row, Grid, Modal, Button, FormControl, ControlLabel, FieldGroup, Form,FormGroup, Checkbox} from "react-bootstrap"

import {Link} from 'react-router-dom'

export default class Landing extends React.Component{

    render(){
        return(
            <Grid>
                <Row>
                    <Col md={4} lg={4} mdOffset={4} lgOffset={4}>
                        <div className="static-modal">


                            <Modal.Dialog>
                                <Modal.Header>
                                    <img width="100%" src="/resources/micelocator.png">
                                    </img>
                                </Modal.Header>

                                <Modal.Body>
                                  <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                      <Col componentClass={ControlLabel} sm={2}>
                                        Email
                                      </Col>
                                      <Col sm={10}>
                                        <FormControl type="email" placeholder="Email" />
                                      </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                      <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                      </Col>
                                      <Col sm={10}>
                                        <FormControl type="password" placeholder="Password" />
                                      </Col>
                                    </FormGroup>

                                    <FormGroup>
                                      <Col smOffset={2} sm={10}>
                                        <Checkbox>Recuérdame</Checkbox>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup>
                                      <Col smOffset={2} sm={10}>
                                        <Button bsStyle="primary">
                                            <Link style={{color:'white'}} to="/user">Login</Link>
                                        </Button>
                                      </Col>
                                    </FormGroup>
                                  </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button>Registrarse</Button>
                                </Modal.Footer>

                            </Modal.Dialog>

                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }

}
