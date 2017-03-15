import React from "react"
import {Col, Panel} from "react-bootstrap"

export default class Space extends React.Component {
    render(){
        const {info} = this.props;
        const content = Object.keys(info).map((key)=>{
            console.log(key,info[key])
            if(key != 'nombre' && key != 'altura' && key != 'largo_ancho' && key != 'aforo' && key != 'servicios'){
                return <p key={key}>
                            {key.charAt(0).toUpperCase()+key.slice(1)}: {info[key]}
                        </p>
            }
            return false;
        })

        return(
            <Col xs={12} md={6}>
                <Panel header={info['nombre']}>
                    <div>
                        {content}
                    </div>
                </Panel>
            </Col>
        )
    }

}
