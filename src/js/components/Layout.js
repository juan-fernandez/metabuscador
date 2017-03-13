import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import MainPanel from "./MainPanel"

import {changeView} from "../actions/spacesActions"

@connect((store) => {
    return {
        spaces: store.spaces
    };
})
export default class Layout extends React.Component {

    changeView(event){
        this.props.dispatch(changeView(event.target.id))
    }

    render() {
        const {spaces} = this.props;
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
                <MainPanel selected={selected[0].id}>
                </MainPanel>


            </div>
        )
    }
}
