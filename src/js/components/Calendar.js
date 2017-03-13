import React from "react"
import { connect } from "react-redux"

@connect((store) => {
    return {
        events: store.events
    };
})
export default class Calendar extends React.Component{

    componentDidMount() {
        console.log("didmount");
        const {calendar} = this.refs;
        $(calendar).fullCalendar({
        		header: {
        			left: 'prev,next today',
        			center: 'title',
        			right: 'month,agendaWeek,agendaDay'
        		},
        		editable: true,
                events: this.props.events,
                height: 650,
                dayClick: (date, jsEvent, view)=>{
                    this.props.addEvent(date);
                }
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
                height: 650,
                dayClick: (date, jsEvent, view)=>{
                    this.props.addEvent(date);
                }
        })
        return(
            <div style={style} ref="calendar">
            </div>
        )
    }
}
