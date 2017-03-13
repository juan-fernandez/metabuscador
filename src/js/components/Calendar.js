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
        $(calendar).fullCalendar({
        		header: {
        			left: 'prev,next today',
        			center: 'title',
        			right: 'month,agendaWeek,agendaDay'
        		},
        		editable: true,
                events: this.props.events,
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
        console.log("unmount");
    }
    render(){

        const {events} = this.props.events;
        const style={
            width:'80%'
        }
        const {calendar} = this.refs;
        $(calendar).fullCalendar('destroy');
        $(calendar).fullCalendar({
        		header: {
        			left: 'prev,next today',
        			center: 'title',
        			right: 'month,agendaWeek,agendaDay'
        		},
        		editable: true,
                events: this.props.events,
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
