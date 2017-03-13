import React from "react"
import Navbarhor from "./Navbarhor"
import Header from "./Header"

export default class Searcher extends React.Component {
   render(){
      const padding_navbarhor = {
         paddingTop: '30px'
      }
      const padding_button = {
         paddingTop: '25px'
      }


      return(
         <div style={padding_navbarhor} class="page-container">
            <Navbarhor>
            </Navbarhor>
            <Header text="Buscador">

            </Header>

            <div class="well">
               <div class="row">
                  <div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <label for="event_type">¿Qué evento quieres organizar?</label>
                     <input type="text" class="form-control" id="event_type"></input>
                  </div>
                  <div class="form-group ui-widget col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <label for="event_where">¿Dónde?</label>
                     <input type="text" class="form-control" id="event_where"></input>
                  </div>
                  <div style={padding_button} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <button type="button" class="btn btn-default">Buscar</button>
                  </div>
               </div>

            </div>

         </div>
      )
   }

}
