import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import MainPanel from "./MainPanel"

import {changeView} from "../actions/spacesActions"

import {addEvent, closeModal, updateSpace, new_event} from "../actions/eventsActions"

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

    render() {
        const {spaces,events} = this.props;
        console.log("layout events:",events)
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

        return(

            <div class="page-container">
                <Modal
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
                <Header text="User Area">
                </Header>

                <Navbar selected={selected[0].id} items={navbar_items} onClick={this.changeView.bind(this)}>
                </Navbar>
                <MainPanel addEvent={this.addEvent.bind(this)} selected={selected[0].id}>
                </MainPanel>


            </div>
        )
    }
}
