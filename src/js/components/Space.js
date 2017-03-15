import React from "react"
import {Col, Panel, Carousel} from "react-bootstrap"

export default class Space extends React.Component {
    render(){
        const {info} = this.props;
        const content = Object.keys(info).map((key)=>{

            /*if(key != 'nombre' && key != 'altura' && key != 'largo_ancho' && key != 'aforo' && key != 'servicios'){
                return <p key={key}>
                            {key.charAt(0).toUpperCase()+key.slice(1)}: {info[key]}
                        </p>
            }*/
            if(key != 'nombre' && key != 'altura' && key != 'largo_ancho' && key != 'aforo' && key != 'servicios'){
                return <Carousel.Item key={key}>
                            <img width={1024} height={768} alt="1024x768" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.castlewales.com%2Fraglan01.jpg"/>
                            <Carousel.Caption>
                                <h3>{key.charAt(0).toUpperCase()+key.slice(1)}</h3>
                                <p> {info[key]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
            }




            return false;
        })



        return(
            <Carousel>
                {content}
                {/*<Col xs={12} md={6}>
                    <Panel header={info['nombre']}>
                        <div>
                            {content}
                        </div>
                    </Panel>
                </Col>*/}
            </Carousel>

        )
    }

}
