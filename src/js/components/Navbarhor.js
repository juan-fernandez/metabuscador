import React from "react"
import {Link} from 'react-router-dom'

import { connect } from "react-redux"

import {Navbar, Nav, NavItem} from "react-bootstrap"

import {logoutUser} from '../actions/authActions'

import {
   Redirect
} from 'react-router-dom'

@connect((store) => {
    return {
        auth: store.auth,
    };
})

export default class Navbarhor extends React.Component{
   logoutUser(){
      this.props.dispatch(logoutUser())
   }
   render(){
      const {auth} = this.props;
      return(
         <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                 <Navbar.Brand>
                    <a href="#">Micelocator</a>
                 </Navbar.Brand>
                 <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                 <Nav>
                 {auth.user_type == 'proveedor' ?
                    <NavItem eventKey={1}><Link style={{color:'white'}} to="/user">Area de Usuario</Link></NavItem>
                    :
                    ""}
                    <NavItem eventKey={2}><Link style={{color:'white'}} to="/buscador">Buscador</Link></NavItem>

                    <NavItem eventKey={3} onClick={this.logoutUser.bind(this)}><Link style={{color:'white'}} to="/">Logout</Link></NavItem>
                 </Nav>
            </Navbar.Collapse>
         </Navbar>
      )
   }
}
