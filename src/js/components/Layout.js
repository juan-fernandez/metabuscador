import React from "react"
import { connect } from "react-redux"
import MyHeader from "./MyHeader"
import MyNavbar from "./MyNavbar"
import MainPanel from "./MainPanel"
import Navbarhor from "./Navbarhor"

import Calendar from "./Calendar"
import Planner from "./Planner"

import Footer from "./Footer"

import {
   Redirect
} from 'react-router-dom'


import {provider_change_view} from "../actions/navActions"

import {addEvent,
      closeModal,
      updateSpace,
      new_event,
      clickEvent,
      removeEvent,
      moveEvent,
      toggleEvent} from "../actions/eventsActions"

import {add_space} from "../actions/spacesActions"


import Modal from "react-modal"

import { Col, Navbar, Nav, NavItem, Tab, Row, Clearfix, Grid } from "react-bootstrap"
import {Link} from 'react-router-dom'


@connect((store) => {
    return {
        spaces: store.spaces,
        events: store.events,
        auth: store.auth,
        nav: store.nav
    };
})
export default class Layout extends React.Component {

    provider_change_view(id){
        this.props.dispatch(provider_change_view(id))
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
    addSpace(space_info){
      console.log('add space')
        this.props.dispatch(add_space(space_info))
    }

    render() {
        const {spaces,events, auth, nav} = this.props;
        const {selected_provider_view, provider_view, tabs, selected_tab} = nav;
        const {user_type} = auth;

        return(

            <div>
                <Grid>
                    <Navbarhor>
                    </Navbarhor>

                    <MyHeader text="Área de Usuario" logo={true}>
                    </MyHeader>

                    <Row>
                        <Col xs={12} sm={4} md={3}>
                            <MyNavbar
                                selected={selected_provider_view}
                                items={provider_view}
                                onMyClick={this.provider_change_view.bind(this)}>
                            </MyNavbar>
                        </Col>


                        <Col xs={12} sm={8} md={9}>
                            <MainPanel
                                clickPlanner={this.toggleEvent.bind(this)}
                                moveEvent={this.moveEvent.bind(this)}
                                clickEvent={this.clickEvent.bind(this)}
                                addEvent={this.addEvent.bind(this)}
                                selected={selected_provider_view}
                                newSpace={this.addSpace.bind(this)}
                                >
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
