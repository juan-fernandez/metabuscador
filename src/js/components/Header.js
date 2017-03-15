import React from "react"

export default class Header extends React.Component {
    render(){
        const {text} = this.props;
        const style = {
            textAlign: 'center',
            marginTop: '10px'
        }
        return(
            <div style={style} class="page-header">
                <img width="40%" src="/resources/micelocator.png">
                </img>
                <h1>{text}</h1>
            </div>
        )
    }

}
