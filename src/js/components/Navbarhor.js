import React from "react"

export default class Navbarhor extends React.Component{
   render(){
      return(
         <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
               <div class="navbar-header">
                  <a class="navbar-brand" href="#">Metabuscador</a>
               </div>
               <ul class="nav navbar-nav">
                  <li><a href="#">Area de Usuario</a></li>
                  <li><a href="#">Buscador</a></li>
               </ul>
            </div>
         </nav>
      )
   }
}
