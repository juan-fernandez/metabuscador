import React from "react"

import { Col, Row} from "react-bootstrap"

export default class Header extends React.Component {
    render(){
        const {text, logo} = this.props;
        const style = {
            textAlign: 'center',
            marginTop: '10px'
        }
        const second_row = logo ? (
            <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <h1>{text}</h1>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <img width="50%" src="/resources/logo.png">
                    </img>
                </Col>
            </Row>
                ):
                (<Row>
                    <Col xs={12} sm={6} md={6} lg={6} xsOffset={0} smOffset={3} mdOffset={3} lgOffset={3}>
                        <h1>{text}</h1>
                    </Col>
                </Row>)

        return(
            <div style={style} class="page-header">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xsOffset={0} smOffset={3} mdOffset={3} lgOffset={3}>
                        <img width="80%" src="/resources/micelocator.png">
                        </img>
                    </Col>
                </Row>
                {second_row}

            </div>
        )
    }

}
