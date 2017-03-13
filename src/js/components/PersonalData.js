import React from "react"

export default class PersonalData extends React.Component{
   render(){
      return(
         <form>
            <div class="form-group">
               <label for="exampleInputEmail1">Correo electrónico</label>
               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail"></input>
               <small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>
            </div>
               <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>

            <div class="form-group">
               <label for="exampleTextarea">Comentarios</label>
               <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>

         </form>
      )
   }
}
