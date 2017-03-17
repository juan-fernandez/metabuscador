import React from "react"
import {Col, Panel, Carousel, Row, Well, Button, Glyphicon, Modal} from "react-bootstrap"

export default class Space extends React.Component {

    constructor(){
        super();
        this.state={
            showBooking: false,
            showTechnical: false
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
                       showTechnical: false
                      })
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
                                <Button><Glyphicon glyph="envelope" /> Reserva</Button>
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
                <Row>
                   <Panel header={info.nombre}>
                      <Col xs={12} sm={12} md={8} lg={8}>
                         <Carousel>
                            {carousel}
                         </Carousel>
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={4}>
                         <Well>
                            <img width={'90%'} src={"resources/logo.png"}/>
                            <h3>{info.nombre}</h3>
                            <h3>Superficie: {info.superficie} m2</h3>
                            <h3>Precio: {info.precio} €/día</h3>
                            <Button onClick={this.openBooking.bind(this)}><Glyphicon glyph="envelope" /> Reserva</Button>
                            <Button onClick={this.openTechnical.bind(this)}><Glyphicon glyph="list-alt" /> Ficha técnica</Button>
                         </Well>
                      </Col>
                   </Panel>
                </Row>
            </div>


        )
    }

}
