import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import MyNavbar from "./MyNavbar"
import MainPanel from "./MainPanel"
import Navbarhor from "./Navbarhor"

import Calendar from "./Calendar"
import Planner from "./Planner"

import {changeView} from "../actions/spacesActions"

import {addEvent,
      closeModal,
      updateSpace,
      new_event,
      clickEvent,
      removeEvent,
      moveEvent,
      toggleEvent} from "../actions/eventsActions"

import Modal from "react-modal"

import { Col, Navbar, Nav, NavItem, Tab, Row, Clearfix, Grid } from "react-bootstrap"
import {Link} from 'react-router-dom'


@connect((store) => {
    return {
        spaces: store.spaces,
        events: store.events
    };
})
export default class Layout extends React.Component {

   changeView(event){
      this.props.dispatch(changeView(event.target.id))
   }
   addEvent(date){
      this.props.dispatch(addEvent(date))
   }
   closeModal(event){
      this.props.dispatch(closeModal())
   }
   newEvent(){
      this.props.dispatch(new_event())
      this.props.dispatch(closeModal())
   }
   updateSpace(ev){
      this.props.dispatch(updateSpace(ev.target.value))
   }
   clickEvent(date){
      //console.log("clicked date: ",date)
      this.props.dispatch(clickEvent(date))
   }
   removeEvent(){
      this.props.dispatch(removeEvent());
   }
   moveEvent(date,delta){
      //console.log("move event", calEvent,delta)
      this.props.dispatch(moveEvent(date,delta))
   }
   toggleEvent(id){
      this.props.dispatch(toggleEvent(id));
   }

   render() {
      const {spaces,events} = this.props;
      const {navbar_items} = spaces;
      const selected = navbar_items.filter((item)=>{
      return item.selected === true;
      })
      const modal_style = {
         content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            width                 : '30%'
         }
      };
      const padding_navbarhor = {
         paddingTop: '0px'
      }


        return(

            <div>






                <Grid>
                    <Navbar inverse>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a>Micelocator</a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1}>
                                            <Link to="/">
                                                Area de Usuario
                                            </Link>
                                    </NavItem>
                                    <NavItem eventKey={2}>
                                            <Link to="/buscador">
                                                Buscador
                                            </Link>
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>

                    <Header text="Área de Usuario">
                    </Header>
                    <Row>
                        <Col xs={2} sm={2} md={2}>
                            <MyNavbar selected={selected[0].id} items={navbar_items} onClick={this.changeView.bind(this)}>
                            </MyNavbar>
                        </Col>


                        <Col xs={10} sm={10} md={10}>
                            <MainPanel clickPlanner={this.toggleEvent.bind(this)} moveEvent={this.moveEvent.bind(this)} clickEvent={this.clickEvent.bind(this)} addEvent={this.addEvent.bind(this)} selected={selected[0].id}>
                            </MainPanel>
                        </Col>
                    </Row>
                </Grid>






            </div>
        )
    }
}
