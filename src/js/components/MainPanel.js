import React from "react"
import Calendar from "./Calendar"
import Planner from "./Planner"

export default class MainPanel extends React.Component{
    render(){
        const {selected,addEvent, clickEvent, moveEvent, clickPlanner} = this.props;

        const shown = selected === '1' ?
            <Calendar moveEvent={moveEvent} clickEvent={clickEvent} addEvent={addEvent}/>:
            <Planner clickEvent={clickPlanner}></Planner>
        return(
            <div>
                {shown}
            </div>
        )
    }
}
