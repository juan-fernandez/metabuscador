import React from "react"
import { connect } from "react-redux"
import {Col, Row, Grid, Modal, Button, FormControl, ControlLabel, FieldGroup, Form,FormGroup, Checkbox} from "react-bootstrap"

import {Link} from 'react-router-dom'

import {loginUser} from '../actions/authActions'


@connect((store) => {
    return {
        auth: store.auth,
    };
})
export default class Landing extends React.Component{
   constructor(){
      super();
      this.state={
         email:"",
         password:""
      }
   }
   updateEmail(ev){
      this.setState({
         email: ev.target.value
      })
   }
   updatePassword(ev){
      this.setState({
         password: ev.target.value
      })
   }
   requestLogin(){
      let creds={
         username: this.state.email,
         password: this.state.password
      }
      this.props.dispatch(loginUser(creds))
   }
   render(){
      const {auth} = this.props;
      console.log(auth)
      return(
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} mdOffset={4} lgOffset={4}>
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
                                        <FormControl onInput={this.updateEmail.bind(this)} type="email" placeholder="Email" value={this.state.email}/>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                      <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                      </Col>
                                      <Col sm={10}>
                                        <FormControl onInput={this.updatePassword.bind(this)} type="password" placeholder="Password" value={this.state.password}/>
                                      </Col>
                                    </FormGroup>
                                    <Col smOffset={2} sm={10}>
                                       <p style={{color:'red'}}>
                                       {auth.errorMessage}
                                       </p>
                                    </Col>
                                    <FormGroup>
                                      <Col smOffset={2} sm={10}>
                                        <Checkbox>Recuérdame</Checkbox>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup>
                                      <Col smOffset={2} sm={10}>
                                        <Button onClick={this.requestLogin.bind(this)} bsStyle="primary">
                                            {/*<Link style={{color:'white'}} to="/user">Login</Link>*/}
                                            Login
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
