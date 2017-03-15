import React from "react"
import ReactDOM from 'react-dom';

import { connect } from "react-redux"

import Navbarhor from "./Navbarhor"
import Header from "./Header"

import {Autosize, Autocomplete, Dropdown, Mask, DatePicker, Combobox } from "react-input-enhancements"

import {FormGroup, Col, FormControl, Carousel, Navbar, Nav, NavItem, Grid, Row, Well} from "react-bootstrap"

import {searchSpace} from "../actions/spacesActions"

import Space from "./Space"


import {Link} from 'react-router-dom'

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

        /*const list_results = espacios.map((espacio,index)=>
            <Space key={index} info={espacio}/>
        )*/
        const list_results = espacios.map((espacio,index)=>
            <Carousel.Item key={index}>
                        <img width={1140} height={450} alt="1140x450" src={espacio.imagen}/>
                        <Carousel.Caption>
                            <h3>{espacio.nombre.charAt(0).toUpperCase()+espacio.nombre.slice(1)}</h3>
                        </Carousel.Caption>
            </Carousel.Item>
        )



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
         <div>
             <Grid>
                 <Navbar inverse>
                         <Navbar.Header>
                             <Navbar.Brand>
                                 <a>Micelocator</a>
                             </Navbar.Brand>
                         </Navbar.Header>
                         <Navbar.Collapse>
                             <Nav>
                                 <NavItem eventKey={1}>
                                         <Link to="/">
                                             Area de Usuario
                                         </Link>
                                 </NavItem>
                                 <NavItem eventKey={2}>
                                         <Link to="/buscador">
                                             Buscador
                                         </Link>
                                 </NavItem>
                             </Nav>
                         </Navbar.Collapse>
                 </Navbar>
                 <Header text="Buscador">

                 </Header>

                 <Well>
                     <Row>
                         <Col xs={12} sm={4} md={4} lg={4}>
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
                         </Col>
                         <Col xs={12} sm={4} md={4} lg={4}>
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
                         <Col style={padding_button} xs={12} sm={4} md={4} lg={4}>
                            <button  onClick={this.searchSpace.bind(this)} type="button" class="btn btn-default">Buscar</button>
                         </Col>
                     </Row>
                 </Well>

             </Grid>

            {searched_space? <Col xs={12} md={6} mdOffset={3}><Carousel>{list_results}</Carousel></Col>:""}



         </div>
      )
   }

}
