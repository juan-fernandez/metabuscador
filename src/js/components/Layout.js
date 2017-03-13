import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import MainPanel from "./MainPanel"
import Navbarhor from "./Navbarhor"

import {changeView} from "../actions/spacesActions"

import {addEvent, closeModal, updateSpace, new_event, clickEvent, removeEvent, moveEvent} from "../actions/eventsActions"

import Modal from "react-modal"


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
            transform             : 'translate(-50%, -50%)'
         }
      };
      const padding_navbarhor = {
         paddingTop: '40px'
      }


        return(

            <div style={padding_navbarhor} class="page-container">
                <Modal // add event
                    style={modal_style}
                    isOpen={events.adding_event}
                    onRequestClose={this.closeModal.bind(this)}
                    contentLabel="Modal"
                >
                    <h1>Nuevo Evento</h1>
                    <div class="form-group">
                        <label for="usr">Espacio:</label>
                        <input value={events.space_name} onChange={this.updateSpace.bind(this)} type="text" class="form-control" id="espacio"></input>
                    </div>
                    <button onClick={this.newEvent.bind(this)} type="button" class="btn btn-default">Añadir</button>
                </Modal>

                <Modal  // remove event
                    style={modal_style}
                    isOpen={events.removing_event}
                    onRequestClose={this.closeModal.bind(this)}
                    contentLabel="Modal"
                >
                    <h1>Estás seguro?</h1>
                    <button onClick={this.removeEvent.bind(this)} type="button" class="btn btn-default">Borrar evento</button>
                </Modal>



                <Header text="Área de Usuario">
                </Header>

                <Navbarhor>
                </Navbarhor>

                <Navbar selected={selected[0].id} items={navbar_items} onClick={this.changeView.bind(this)}>
                </Navbar>


                <MainPanel moveEvent={this.moveEvent.bind(this)} clickEvent={this.clickEvent.bind(this)} addEvent={this.addEvent.bind(this)} selected={selected[0].id}>
                </MainPanel>


            </div>
        )
    }
}
