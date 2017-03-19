import React from "react"
import {Col, Panel, Carousel, Row, Well, Button, Glyphicon, Modal} from "react-bootstrap"


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import Message from 'material-ui/svg-icons/action/question-answer'
import Settings from 'material-ui/svg-icons/action/view-headline'
import Euro from 'material-ui/svg-icons/action/euro-symbol'
import People from 'material-ui/svg-icons/social/people'
import Close from 'material-ui/svg-icons/content/clear'

import {List, ListItem} from "material-ui/List"
import Dialog from 'material-ui/Dialog';


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
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        labelPosition="before"
        icon={<Close/>}
        onTouchTap={this.close.bind(this)}
      />,
    ];
    const actions_technical = [
      <FlatButton
          label="Cerrar"
          primary={true}
          labelPosition="before"
          icon={<Close/>}
          onTouchTap={this.close.bind(this)}
      />
   ];


        return(

            <MuiThemeProvider>
               <div>
               <Dialog
                   title={`Reserva ${info.nombre}`}
                   actions={actions}
                   modal={false}
                   open={this.state.showBooking}
                   onRequestClose={this.close.bind(this)}
                 >
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
                           <RaisedButton
                              style={{width:'100%'}}
                              labelPosition="before"
                              label="Reserva"
                              icon={<Message/>}
                              onClick={this.openConfirmation.bind(this)}
                           />
                       </Col>
                   </Row>
                 </Dialog>
                  <Dialog
                     title={`Ficha técnica de ${info.nombre}`}
                     actions={actions_technical}
                     modal={false}
                     open={this.state.showTechnical}
                     onRequestClose={this.close.bind(this)}
                    >
                     <Row style={{paddingBottom:'10px'}}>
                         <Col xs={12} sm={12} md={8} lg={6} xsOffset={0} smOffset={0} mdOffset={2} lgOffset={3}>
                             <img width={'100%'} src={"resources/logo.png"}/>
                         </Col>
                     </Row>
                     <Well>
                        <h4>Superficie: {info.superficie} m2</h4>
                        <h4>Precio: {info.precio} €/día</h4>
                        <h4>Número de salas: </h4>
                        <h4>Servicios extra: </h4>
                     </Well>
                    </Dialog>




               <Dialog
                  modal={false}
                  open={this.state.showConfirmation}
                  onRequestClose={this.close.bind(this)}
                 >
                  <Glyphicon glyph="ok" /> ¡Mensaje enviado!
                </Dialog>


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
                  </div>
               </MuiThemeProvider>



        )
    }

}
