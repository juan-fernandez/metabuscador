import React from "react"
import {Link} from 'react-router-dom'

export default class Navbarhor extends React.Component{
   render(){
      return(
         <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
               <div class="navbar-header">
                  <a class="navbar-brand" href="#">Metabuscador</a>
               </div>
               <ul class="nav navbar-nav">
                  <li><Link to="/">Area de Usuario</Link></li>
                  <li><Link to="/buscador">Buscador</Link></li>
               </ul>
            </div>
         </nav>
      )
   }
}
