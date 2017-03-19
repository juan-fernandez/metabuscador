import React from "react"
import ReactDOM from 'react-dom';

import { connect } from "react-redux"

import Navbarhor from "./Navbarhor"
import MyHeader from "./MyHeader"

import {Autosize, Autocomplete, Dropdown, Mask, DatePicker, Combobox } from "react-input-enhancements"

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
      return(
         <div>
             <Grid>

                 <Navbarhor>
                 </Navbarhor>



                 <MyHeader text="Buscador" logo={false}>
                 </MyHeader>

                 <Well>
                     <Row>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_type">¿Tipo de evento?</label>
                            <MuiThemeProvider>
                               <SelectField
                                   hintText="Selecciona un tipo de evento"
                                   value={chosen_event}
                                   onChange={this.handleChange.bind(this)}
                                 >
                                    {drop_menu}
                                 </SelectField>
                              </MuiThemeProvider>
                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_place">¿Dónde?</label>
                            <MuiThemeProvider>
                               <SelectField
                                   hintText="Selecciona dónde"
                                   value={chosen_place}
                                   onChange={this.handleChangeWhere.bind(this)}
                                 >
                                    {drop_menu_place}
                                 </SelectField>
                              </MuiThemeProvider>
                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_numero">¿Cuántos sois?</label>
                            <FormGroup>
                               <FormControl
                                   type='text'
                                   placeholder='Cuántos sois'>
                               </FormControl>

                            </FormGroup>
                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_fecha">Fecha</label>
                            <FormGroup>
                               <DatePicker
                                   value={'mié. 15/03/2017'}
                                   onValuePreUpdate={v => parseInt(v, 10) > 1e8 ?
                                     moment(parseInt(v, 10)).format('ddd DD/MM/YYYY') : v
                                   }
                                   locale='es'
                                   dropdownProps={{style:{width:'100%'}}}
                                 >

                                   {(inputProps, otherProps,registerInput ) =>
                                     <FormControl
                                       {...inputProps}
                                       style={{ ...inputProps.style, fontFamily: 'monospace' }}
                                       ref={c => registerInput(ReactDOM.findDOMNode(c))}
                                       type='text'
                                     />
                                   }
                                 </DatePicker>
                              </FormGroup>
                         </Col>

                     </Row>
                     <Row>
                        <Col style={padding_button} xs={12} sm={3} md={3} lg={3} xsOffset={0} smOffset={9} mdOffset={9} lgOffset={9}>
                           <Button onClick={this.searchSpace.bind(this)} bsStyle="primary" bsSize="large" block>Buscar</Button>

                        </Col>
                     </Row>

                 </Well>
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
