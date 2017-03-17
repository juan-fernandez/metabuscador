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


@connect((store) => {
    return {
        spaces: store.spaces,
        events: store.events
    };
})

export default class Searcher extends React.Component {
    searchSpace(){
        this.props.dispatch(searchSpace())
    }

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

      return(
         <div>
             <Grid>
                 {/*<Navbarhor>
                 </Navbarhor>*/}

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Micelocator</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}><Link style={{color:'white'}} to="/user">Area de Usuario</Link></NavItem>
                            <NavItem eventKey={2}><Link style={{color:'white'}} to="/buscador">Buscador</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



                 <MyHeader text="Buscador" logo={false}>
                 </MyHeader>

                 <Well>
                     <Row>
                         <Col xs={12} sm={3} md={3} lg={3}>
                            <label for="event_type">¿Tipo de evento?</label>
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
                         </Col>
                         <Col xs={12} sm={3} md={3} lg={3}>
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
