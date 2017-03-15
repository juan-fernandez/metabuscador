import React from "react"
import { connect } from "react-redux"

@connect((store) => {
    return {
        events: store.events
    };
})
export default class Calendar extends React.Component{

    componentDidMount() {
        const {calendar} = this.refs;
        const {active_events,espacios} = this.props.events;


        $(calendar).fullCalendar({
        		header: {
        			left: 'prev,next today',
        			center: 'title',
        			right: 'month,agendaWeek,agendaDay'
        		},
        		editable: true,
                events: active_events.map((event_id)=>{
                    console.log("day",event_id[event_id.length-1])

                    return{
                        title: espacios[event_id.substring(0,event_id.length-2)].nombre ,
                        date: new Date(2017,2,+event_id[event_id.length-1]+1),
                        allDay: true,
                    }
                }),
                height: 450,
                dayClick: (date, jsEvent, view)=>{
                    this.props.addEvent(date);
                },
                eventClick: (calEvent)=>{
                    this.props.clickEvent(calEvent.date)
                },
                eventDrop: (calEvent,delta)=>{
                    this.props.moveEvent(calEvent.date,delta)
                },
                locale:'es',
        })
    }
    componentWillUnmount(){
        const {calendar} = this.refs;
        $(calendar).fullCalendar('destroy');
    }
    render(){

        const {events} = this.props.events;
        const style={

        }
        const {calendar} = this.refs;
        const {active_events,espacios} = this.props.events;
        $(calendar).fullCalendar('destroy');
        $(calendar).fullCalendar({
        		header: {
        			left: 'prev,next today',
        			center: 'title',
        			right: 'month,agendaWeek,agendaDay'
        		},
        		editable: true,
                events: active_events.map((event_id)=>{
                    console.log("day",event_id[event_id.length-1])

                    return{
                        title: espacios[event_id.substring(0,event_id.length-2)].nombre ,
                        date: new Date(2017,2,+event_id[event_id.length-1]+1),
                        allDay: true,
                    }
                }),
                height: 450,
                dayClick: (date, jsEvent, view)=>{
                    this.props.addEvent(date);
                },
                eventClick: (calEvent)=>{
                    this.props.clickEvent(calEvent.date)
                },
                eventDrop: (calEvent,delta)=>{
                    this.props.moveEvent(calEvent.date,delta)
                },
                locale:'es',
        })
        return(
            <div style={style} ref="calendar">
            </div>
        )
    }
}
