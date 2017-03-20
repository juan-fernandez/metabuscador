import React from "react"
import ReactDOM from 'react-dom';

import { connect } from "react-redux"

import Navbarhor from "./Navbarhor"
import MyHeader from "./MyHeader"

import {Autosize, Autocomplete, Dropdown, Mask, Combobox } from "react-input-enhancements"

import {FormGroup, Col, FormControl, Carousel, Navbar, Nav, NavItem, Grid, Row, Well, Button} from "react-bootstrap"

import {searchSpace} from "../actions/spacesActions"

import Space from "./Space"

import Footer from "./Footer"

import {Link} from 'react-router-dom'

import {moment} from 'moment'

import { DayPicker } from 'react-date-picker'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';



@connect((store) => {
    return {
        spaces: store.spaces,
        events: store.events,
    };
})

export default class Searcher extends React.Component {
   constructor(){
      super();
      this.state={
         chosen_event:null,
         chosen_place:null,
         date:null,
         num_participants:null
      }
   }
    searchSpace(){
        this.props.dispatch(searchSpace())
    }
     handleChange = (event, index, values) => this.setState({chosen_event:values});
     handleChangeWhere = (event, index, values) => this.setState({chosen_place:values});

    render(){
        const {searched_space} = this.props.spaces;
        const {espacios} = this.props.events;

        const list_spaces = espacios.map((espacio,index)=>
            <Space key={index} info={espacio}/>
        )


        const padding_button = {
            paddingTop: '25px'
        }
        const event_type= [
            {
                value:"Coaching",
                text:"Coaching"
            },
            {
                value:"Seminarios",
                text:"Seminarios"
            },
            {
                value:"Formación",
                text:"Formación"
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
                value:"Convenciones",
                text:"Convenciones"
            },
            {
                value:"Exposiciones",
                text:"Exposiciones"
            },
            {
                value:"Ferias",
                text:"Ferias"
            },
            {
                value:"Grandes Eventos",
                text:"Grandes Eventos"
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
                value:"Sevilla",
                text:"Sevilla"
            },
            {
                value:"Toledo",
                text:"Toledo"
            },
        ]
        const drop_menu = event_type.map((event_t,index)=>{
           return <MenuItem
                     key={index}
                     insetChildren={true}
                     value={event_t.value}
                     primaryText={event_t.value}
                     />
        })
       const drop_menu_place = event_place.map((event_w,index)=>{
          return <MenuItem
                    key={index}
                    insetChildren={true}
                    value={event_w.value}
                    primaryText={event_w.value}
                    />
       })
        const {chosen_event} = this.state;
        const {chosen_place} = this.state;
        const paper_style = {
           margin: 10,
           padding: 20,

        }
      return(
         <div>
             <Grid>

                 <Navbarhor>
                 </Navbarhor>



                 <MyHeader text="Buscador" logo={false}>
                 </MyHeader>

                 <MuiThemeProvider>
                 <Paper style={paper_style} zDepth={2}>
                     <Row>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_type">¿Tipo de evento?</label>

                               <SelectField
                                   hintText="Selecciona un tipo de evento"
                                   value={chosen_event}
                                   onChange={this.handleChange.bind(this)}
                                   id="tipo"
                                 >
                                    {drop_menu}
                                 </SelectField>

                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_place">¿Dónde?</label>

                               <SelectField
                                   hintText="Selecciona dónde"
                                   value={chosen_place}
                                   onChange={this.handleChangeWhere.bind(this)}
                                   id="donde"
                                 >
                                    {drop_menu_place}
                                 </SelectField>

                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_numero">¿Cuántos sois?</label>
                            <TextField
                                 hintText="Número de asistentes"
                                 name="event_numero"
                                 id="numero"
                               />
                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_fecha">Fecha</label>
                            <DatePicker />
                         </Col>

                     </Row>
                     <Row>
                        <Col style={padding_button} xs={12} sm={3} md={3} lg={3} xsOffset={0} smOffset={9} mdOffset={9} lgOffset={9}>

                           <RaisedButton
                              style={{width:'100%'}}
                              label="Buscar"
                              labelPosition="before"
                              primary={true}
                              icon={<Search />}
                              onClick={this.searchSpace.bind(this)}
                            />
                        </Col>
                     </Row>

                 </Paper>
                 </MuiThemeProvider>
                       {
                          searched_space? list_spaces:""
                       }
                  <Footer>
                  </Footer>
             </Grid>





         </div>
      )
   }

}
