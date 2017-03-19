import React from "react"
import {Col, Panel, Carousel, Row, Well, Button, Glyphicon, Modal} from "react-bootstrap"


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Message from 'material-ui/svg-icons/action/question-answer'
import Settings from 'material-ui/svg-icons/action/view-headline'
import Euro from 'material-ui/svg-icons/action/euro-symbol'
import People from 'material-ui/svg-icons/social/people'

import {List, ListItem} from "material-ui/List"


export default class Space extends React.Component {

    constructor(){
        super();
        this.state={
            showBooking: false,
            showTechnical: false,
            showConfirmation: false
        }
    }
    openBooking(){
        this.setState({showBooking: true})
    }
    openTechnical(){
        this.setState({showTechnical: true})
    }
    close() {
        this.setState({ showBooking: false ,
                       showTechnical: false,
                       showConfirmation: false
                      })
   }
   openConfirmation(){
      this.setState({showConfirmation: true,
                     showBooking: false})
   }

    render(){
        const {info} = this.props;
        const carousel = info.imagen.map((imagen,index)=>{
             return <Carousel.Item key={index}>
                         <img width={1140} height={450} alt="1140x450" src={imagen}/>
                     </Carousel.Item>
        })



        return(
            <div>
                <Modal show={this.state.showBooking} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reserva {info.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={6} xsOffset={0} smOffset={0} mdOffset={2} lgOffset={3}>
                                <img width={'100%'} src={"resources/logo.png"}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={6} xsOffset={0} smOffset={0} mdOffset={2} lgOffset={3}>
                                <h3>¿Quieres reservar {info.nombre}?</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={6} xsOffset={0} smOffset={0} mdOffset={2} lgOffset={3}>
                                <Button onClick={this.openConfirmation.bind(this)}><Glyphicon glyph="envelope" /> Reserva</Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showTechnical} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ficha técnica de {info.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row style={{paddingBottom:'10px'}}>
                            <Col xs={12} sm={12} md={8} lg={6} xsOffset={0} smOffset={0} mdOffset={2} lgOffset={3}>
                                <img width={'100%'} src={"resources/logo.png"}/>
                            </Col>
                        </Row>
                        <Well>
                           <h3>{info.nombre}</h3>
                           <h3>Superficie: {info.superficie} m2</h3>
                           <h3>Precio: {info.precio} €/día</h3>
                           <h3>Número de salas: </h3>
                           <h3>Servicios extra: </h3>
                        </Well>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showConfirmation} onHide={this.close.bind(this)}>
                    <Modal.Body style={{paddingTop:'20px'}}>
                        <Glyphicon glyph="ok" /> ¡Mensaje enviado!
                    </Modal.Body>
                </Modal>

               <MuiThemeProvider>
                  <Card
                     style={
                        {
                           margin:'10px'
                        }
                     }
                     zDepth={3}
                     >
                     <CardHeader
                        title={info.nombre}
                        subtitle={"Lienzo Norte"}
                     />
                     <CardMedia
                        overlay={<CardTitle title={info.nombre} subtitle={"Lienzo Norte"} />}
                     >
                        <Carousel>
                           {carousel}
                        </Carousel>
                     </CardMedia>
                     <CardText>
                        <Row>
                           <Col xs={12} sm={12} md={4} lg={4}>
                              <img width="100%" src="resources/logo.png"/>
                           </Col>
                           <Col xs={12} sm={12} md={8} lg={8}>
                              <List>
                                 <ListItem primaryText={<div>{info.superficie} m<sup>2</sup></div>} leftIcon={<People />} />
                                 <ListItem primaryText={info.precio+' €'} leftIcon={<Euro />} />

                              </List>
                           </Col>
                        </Row>


                     </CardText>
                     <CardActions>
                        <FlatButton
                           labelPosition="before"
                           label="Reserva"
                           icon={<Message/>}
                           onClick={this.openBooking.bind(this)}
                        />
                        <FlatButton
                           labelPosition="before"
                           label="Ficha técnica"
                           icon={<Settings/>}
                           onClick={this.openTechnical.bind(this)}
                        />
                     </CardActions>
                  </Card>
               </MuiThemeProvider>
            </div>


        )
    }

}
