import React from "react"
import Calendar from "./Calendar"

export default class MainPanel extends React.Component{
    render(){
        const style = {
            position: 'fixed',
            left: '9%',
            width: '92%',
        }
        const {events,selected,addEvent} = this.props;
        console.log("main panel events:",events)

        const shown = selected === '1' ? <Calendar addEvent={addEvent}/>:"Otros"
        return(
            <div style={style}>
                {shown}
            </div>
        )
    }
}
