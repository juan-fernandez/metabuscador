import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import MainPanel from "./MainPanel"

import {changeView} from "../actions/spacesActions"

import {addEvent} from "../actions/eventsActions"

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

    render() {
        const {spaces,events} = this.props;
        console.log("layout events:",events)
        const {navbar_items} = spaces;
        const selected = navbar_items.filter((item)=>{
            return item.selected === true;
        })


        return(

            <div class="page-container">
                <Header text="User Area">
                </Header>

                <Navbar selected={selected[0].id} items={navbar_items} onClick={this.changeView.bind(this)}>
                </Navbar>
                <MainPanel events={events} addEvent={this.addEvent.bind(this)} selected={selected[0].id}>
                </MainPanel>


            </div>
        )
    }
}
