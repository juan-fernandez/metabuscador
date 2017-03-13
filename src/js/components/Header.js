import React from "react"

export default class Header extends React.Component {
    render(){
        const {text} = this.props;
        const style = {
            paddingLeft: "20px"
        }
        return(
            <div style={style} class="page-header">
                <h1>{text}</h1>
            </div>
        )
    }

}
