import React from "react"
import {Col, Panel, Carousel, Row, Well, Button} from "react-bootstrap"

export default class Space extends React.Component {
    render(){
        const {info} = this.props;
        const carousel = info.imagen.map((imagen,index)=>{
             return <Carousel.Item key={index}>
                         <img width={1140} height={450} alt="1140x450" src={imagen}/>
                     </Carousel.Item>
        })



        return(
            <Row>
               <Panel header={info.nombre}>
                  <Col xs={8} sm={8} md={8}>
                     <Carousel>
                        {carousel}
                     </Carousel>
                  </Col>
                  <Col xs={4} sm={4} md={4}>
                     <Well>
                        <h3>{info.nombre}</h3>
                        <h3>Superficie: {info.superficie} m2</h3>
                        <h3>Precio: {info.precio} €/día</h3>
                        <Button>Reserva</Button>
                     </Well>
                  </Col>
               </Panel>
            </Row>

        )
    }

}
