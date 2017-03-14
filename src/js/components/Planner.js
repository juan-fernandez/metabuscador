import React from "react"

import { connect } from "react-redux"

@connect((store) => {
    return {
        events: store.events
    };
})

export default class Planner extends React.Component{
    componentDidMount() {
        const {tabella} = this.refs;
        const {events} = this.props;

        var data = {};
        data.tableHeader = [];
        var from = events.date_range.from;
        var to = events.date_range.to;
        var date_from = new Date(from);
        var date_to = new Date(to)
        var da = 100;

        while(date_from.getTime() != date_to.getTime()){
            data.tableHeader.push([date_from.getDate()+'-'+(date_from.getMonth()+1)+'-'+date_from.getFullYear()]);
            date_from.setDate(date_from.getDate()+1)
        }
        data.from = "";
        data.rows = events.events.map((event,index_row)=>{
            return {
                rowHeader: '<h2 class="table-h"><a>'+event.title+'</a></h2>',
                rowVal:event.properties.map((property,index_prop)=>{
                    return data.tableHeader.map((item,index_col)=>{
                        return '<span id='+index_row+index_prop+index_col+'>x</span>'
                    })
                }),
                rowDesc: event.properties
            }
        })

        var hotelrowVal = new Tabella(
            tabella, data);
        hotelrowVal.refreshSize();

        document.querySelectorAll('span').forEach((element)=>{
            //console.log(element.parentElement.parentElement)
            element.parentElement.parentElement.addEventListener('click',(event)=>{
                console.log("clicked:",event.target)
            })
        })
    }
    componentWillUnmount(){
        const {tabella} = this.refs;

    }
    render(){


        return(
            <div class="tabella-ctr" ref="tabella">
            </div>
        )
    }
}
