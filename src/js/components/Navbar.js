import React from "react"

export default class Navbar extends React.Component{

    render(){
        const {items,onClick,selected} = this.props;

        const list = items.map((item)=>{
            return <a onClick={onClick} id={item.id} key={item.id} href="#" class={selected === item.id ? "list-group-item active":"list-group-item"}>{item.text}</a>
        })

        const style={
            height: '100%',
            backgroundColor: 'lightgrey',
            position: 'fixed'
        }
        return(
            <div style={style} class="col-xs-4 col-sm-2 col-md-1 col-lg-1">
                <div class="list-group">
                    {list}
                </div>
            </div>
        )
    }
}
