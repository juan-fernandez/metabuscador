import React from "react"
import { connect } from "react-redux"

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

@connect((store) => {
    return {
        events: store.events
    };
})
export default class Calendar extends React.Component{

    render(){

        const {events} = this.props.events;

        const {calendar} = this.refs;
        const {active_events,espacios} = this.props.events;

        return(
            <div style={{height:'500px'}}>
                <BigCalendar
                    {...this.props}
                    events={active_events.map((event_id)=>{
                        let array = event_id.split("-");
                        return{
                            title: espacios[array[0]].nombre ,
                            start: new Date(2017,2,+array[2]+1),
                            end: new Date(2017,2,+array[2]+2),
                            allDay: true,
                        }
                    })}
                    culture='es'
                    defaultDate={new Date(moment())}
                    >
                </BigCalendar>
            </div>

        )
    }
}
