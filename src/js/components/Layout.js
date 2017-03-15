import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import MyNavbar from "./MyNavbar"
import MainPanel from "./MainPanel"
import Navbarhor from "./Navbarhor"

import Calendar from "./Calendar"
import Planner from "./Planner"

import Footer from "./Footer"



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



        return(

            <div>

                <Grid>

                    <Navbarhor>
                    </Navbarhor>

                    <Row>
                        <Header text="Área de Usuario">
                        </Header>
                    </Row>

                    <Row>
                        <Col xs={12} sm={4} md={2}>
                            <MyNavbar selected={selected[0].id} items={navbar_items} onClick={this.changeView.bind(this)}>
                            </MyNavbar>
                        </Col>


                        <Col xs={12} sm={8} md={10}>
                            <MainPanel clickPlanner={this.toggleEvent.bind(this)} moveEvent={this.moveEvent.bind(this)} clickEvent={this.clickEvent.bind(this)} addEvent={this.addEvent.bind(this)} selected={selected[0].id}>
                            </MainPanel>
                        </Col>
                    </Row>

                  <Footer>
                  </Footer>

                </Grid>






            </div>
        )
    }
}
