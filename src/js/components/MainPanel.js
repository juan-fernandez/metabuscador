import React from "react"
import Calendar from "./Calendar"
import Planner from "./Planner"
import NewSpace from "./NewSpace"

export default class MainPanel extends React.Component{
    render(){
        const {newSpace, selected,addEvent, clickEvent, moveEvent, clickPlanner} = this.props;

        const shown = selected === '1' ?
            <Calendar moveEvent={moveEvent} clickEvent={clickEvent} addEvent={addEvent}/>:
            selected=== '2' ? (<Planner clickEvent={clickPlanner}></Planner>):
            <NewSpace submit={newSpace}/>
        return(
            <div>
                {shown}
            </div>
        )
    }
}
