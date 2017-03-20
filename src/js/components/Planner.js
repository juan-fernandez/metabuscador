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
        const {events,clickEvent} = this.props;
        //console.log("did mount")
        var data = {};
        data.tableHeader = [];
        var from = events.date_range.from;
        var to = events.date_range.to;
        var date_from = new Date(from);
        var date_to = new Date(to)

        while(date_from.getTime() != date_to.getTime()){
            data.tableHeader.push([date_from.getDate()+'-'+(date_from.getMonth()+1)+'-'+date_from.getFullYear()]);
            date_from.setDate(date_from.getDate()+1)
        }
        data.from = "";
        data.rows = events.espacios.map((espacio,index_row)=>{
            return {
                rowHeader: '<h2 class="table-h"><a>'+espacio.nombre+'</a></h2>',
                rowVal:espacio.servicios.map((servicio,index_prop)=>{

                    return data.tableHeader.map((item,index_col)=>{
                        return '<span id='+index_row+'-'+index_prop+'-'+index_col+'>x</span>'
                    })
                }),
                rowDesc: espacio.servicios
            }
        })



        var hotelrowVal = new Tabella(
            tabella, data);
        hotelrowVal.refreshSize();

        document.querySelectorAll('span').forEach((element)=>{
            let array = element.id.split('-');
            if(array.length == 3){
                let container = element.parentElement.parentElement.parentElement;
                //console.log(element.parentElement.parentElement)
                container.addEventListener('click',(event)=>{
                    console.log("clicked!",event)
                    clickEvent(element.id);
                    return false;
                })
            }

        })
        events.active_events.map((event_id)=>{
           // rgb(159, 168, 218) oscuras
           // rgb(197, 202, 233) claras
           // rgb(233, 196, 196) seleccionadas
           let container = document.getElementById(event_id).parentElement.parentElement.parentElement;
           container.style.backgroundColor = 'rgb(233, 196, 196)';
        })
    }
   componentWillReceiveProps(nextProps){
      const {events,clickEvent} = nextProps;
      //console.log("props")
      document.querySelectorAll('span').forEach((element)=>{
          let container = element.parentElement.parentElement.parentElement;
          //console.log(element.parentElement.parentElement)
          let array = element.id.split('-');
          if(array.length == 3){
              if(array[2]%2==0){
                 container.style.backgroundColor = 'rgb(197, 202, 233)'
              }else{
                 container.style.backgroundColor = 'rgb(159, 168, 218)'
              }
          }
      })
      events.active_events.map((event_id)=>{
         // rgb(159, 168, 218) oscuras
         // rgb(197, 202, 233) claras
         // rgb(233, 196, 196) seleccionadas
         let container = document.getElementById(event_id).parentElement.parentElement.parentElement;
         container.style.backgroundColor = 'rgb(233, 196, 196)';
      })
   }
   componentWillUnmount(){
      const {tabella} = this.refs;
      //console.log("un mount")
   }
   render(){


      return(
         <div class="tabella-ctr" ref="tabella">
         </div>
      )
   }
}
