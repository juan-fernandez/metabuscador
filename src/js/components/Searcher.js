import React from "react"
import Navbarhor from "./Navbarhor"

export default class Searcher extends React.Component {
   render(){
      const padding_navbarhor = {
         paddingTop: '40px'
      }
      return(
         <div style={padding_navbarhor} class="page-container">
            <Navbarhor>
            </Navbarhor>
            <div class="page-header">
                <h1>Buscador</h1>
            </div>
         </div>
      )
   }

}
