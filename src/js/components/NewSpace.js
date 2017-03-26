import React from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { connect } from "react-redux"

@connect((store) => {
    return {
        spaces: store.spaces,
    };
})

export default class NewSpace extends React.Component{
   constructor(props){
      super(props)
      this.state={
           nombre: "",
           superficie: 0,
           altura: 0,
           largo_ancho: 0,
           aforo: 0,
           precio: 0,
           servicios: "",
           imagen: ""
      }
   }
   handleChange(ev){
      this.setState({
         [ev.target.id]:ev.target.value
      })
   }
   render(){
      const {submit, spaces} = this.props;
      const {isAddingSpace, isAdded, response} = spaces;
      console.log(response)
      const style = {
         refresh:{
             display: 'inline-block',
             position: 'absolute',
         },
         container: {
             position:'relative'
         }
      }
      return(
         <MuiThemeProvider>

            <div>
               {isAddingSpace ?
               <div style={style.container}>
                  <RefreshIndicator
                    size={40}
                    left={100}
                    top={100}
                    loadingColor="#FF9800"
                    status= {isAddingSpace ? "loading":"hide"}
                    style={style.refresh}
                  />
               </div>
               :""}
               <TextField
                  id='nombre'
                  hintText="Nombre espacio"
                  floatingLabelText="Nombre espacio"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.nombre}
                /><br />
                <TextField
                  id='superficie'
                  hintText="Superficie"
                  floatingLabelText="Superficie"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.superficie}
                /><br />
                <TextField
                  id='altura'
                  hintText="Dimensiones"
                  floatingLabelText="Dimensiones"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.altura}
                /><br />
                <TextField
                  id='precio'
                  hintText="Precio"
                  floatingLabelText="Precio"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.precio}
                /><br />
                <TextField
                  id='servicios'
                  hintText="Servicios"
                  floatingLabelText="Servicios"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.servicios}
                /><br />
                <TextField
                  id='imagen'
                  hintText="URL Fotos"
                  floatingLabelText="URL Fotos"
                  floatingLabelFixed={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.imagen}
                /><br />
                <p>{isAdded ? response.data.message:""}</p>
                <RaisedButton
                  label="Submit"
                  primary={true}
                  onTouchTap={()=>{submit(this.state)}}
                  />

            </div>
         </MuiThemeProvider>
      )
   }
}
