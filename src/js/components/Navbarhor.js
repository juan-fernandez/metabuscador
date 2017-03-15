import React from "react"
import {Link} from 'react-router-dom'

export default class Navbarhor extends React.Component{
   render(){
      return(
         <nav class="navbar navbar-default navbar-top">
            <div class="container">
               <div class="navbar-header">
                  <Link class="navbar-brand" to="/">Micelocator</Link>
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
