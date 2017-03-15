import React from "react"
import ReactDOM from 'react-dom';

import Navbarhor from "./Navbarhor"
import Header from "./Header"

import {Autosize, Autocomplete, Dropdown, Mask, DatePicker, Combobox } from "react-input-enhancements"

import {FormGroup, Col, FormControl} from "react-bootstrap"



export default class Searcher extends React.Component {
    render(){
        const padding_navbarhor = {
            paddingTop: '0px'
        }
        const padding_button = {
            paddingTop: '25px'
        }
        const event_type= [
            {
                value:"Boda",
                text:"Boda"
            },
            {
                value:"Bautizo",
                text:"Bautizo"
            },
            {
                value:"Comuniones",
                text:"Comuniones"
            },
            {
                value:"Cumpleaños",
                text:"Cumpleaños"
            },
            {
                value:"Graduación",
                text:"Graduación"
            },
            {
                value:"Concierto",
                text:"Concierto"
            },
            {
                value:"Cena de Gala",
                text:"Cena de Gala"
            },
            {
                value:"Coaching, seminarios, formación",
                text:"Coaching, seminarios, formación"
            },
            {
                value:"Conferencias",
                text:"Conferencias"
            },
            {
                value:"Congresos",
                text:"Congresos"
            },
            {
                value:"Eventos deportivos",
                text:"Eventos deportivos"
            },
        ]

        const event_place=[
            {
                value:"Albacete",
                text:"Albacete"
            },
            {
                value:"Alicante",
                text:"Alicante"
            },
            {
                value:"Almería",
                text:"Almería"
            },
            {
                value:"Ávila",
                text:"Ávila"
            },
            {
                value:"Badajoz",
                text:"Badajoz"
            },
            {
                value:"Madrid",
                text:"Madrid"
            },
            {
                value:"Barcelona",
                text:"Barcelona"
            },
            {
                value:"Bautizo",
                text:"Bautizo"
            },
            {
                value:"Sevilla",
                text:"Sevilla"
            },
            {
                value:"Toledo",
                text:"Toledo"
            },    
        ]

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

                    <FormGroup>
                        <Combobox
                            options={event_type}
                            dropdownProps={{style:{width:'100%'}}}
                            autocomplete
                            autosize
                            >
                            {(inputProps,otherProps,registerInput)=>
                                <FormControl
                                    {...inputProps}
                                    ref={c=>registerInput(ReactDOM.findDOMNode(c))}
                                    type='text'
                                    placeholder='Elige el tipo de evento'>
                                </FormControl>
                            }
                        </Combobox>
                    </FormGroup>



                  </div>
                  <div class="form-group ui-widget col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <label for="event_where">¿Dónde?</label>
                     <FormGroup>
                         <Combobox
                             options={event_place}
                             dropdownProps={{style:{width:'100%'}}}
                             autocomplete
                             autosize
                             >
                             {(inputProps,otherProps,registerInput)=>
                                 <FormControl
                                     {...inputProps}
                                     ref={c=>registerInput(ReactDOM.findDOMNode(c))}
                                     type='text'
                                     placeholder='Elige el lugar'>
                                 </FormControl>
                             }
                         </Combobox>
                     </FormGroup>
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
