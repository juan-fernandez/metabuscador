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


        data.rows = events.events.map((event)=>{
            return {
                rowHeader: '<h2 class="table-h"><a href="#">'+event.title+'</a></h2>',
                rowVal:event.properties.map((property)=>{
                    return data.tableHeader.map((item)=>{
                        return 'x'
                    })
                }),
                rowDesc: event.properties
            }
        })

        var hotelrowVal = new Tabella(
            tabella, data);
        hotelrowVal.refreshSize();

    }
    componentWillUnmount(){
        const {tabella} = this.refs;

    }
    render(){
        const style={

        }
        return(
            <div class="tabella-ctr" style={style} ref="tabella">
            </div>
        )
    }
}
