import React from "react"

export default class MainPanel extends React.Component{
    render(){
        const style = {
            position: 'fixed',
            left: '9%',
            width: '92%',
            height: '100%',
            backgroundColor: 'lightgrey',
        }
        const {selected} = this.props;
        const shown = selected === '1' ? "Espacios":"Otros"
        return(
            <div style={style}>
                {shown}
            </div>
        )
    }
}
