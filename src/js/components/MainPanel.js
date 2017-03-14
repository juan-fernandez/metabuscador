import React from "react"
import Calendar from "./Calendar"
import Planner from "./Planner"

export default class MainPanel extends React.Component{
    render(){
        const style = {
            position: 'fixed',
            left: '15%',

        }
        const {selected,addEvent, clickEvent, moveEvent, clickPlanner} = this.props;

        const shown = selected === '1' ?
            <Calendar moveEvent={moveEvent} clickEvent={clickEvent} addEvent={addEvent}/>:
            <Planner clickEvent={clickPlanner}></Planner>
        return(
            <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10" style={style}>
                {shown}
            </div>
        )
    }
}
