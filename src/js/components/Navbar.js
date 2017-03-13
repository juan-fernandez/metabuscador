import React from "react"

export default class Navbar extends React.Component{

    render(){
        const style={
            height: '100%',
            position: 'fixed'
        }
        const {items,onClick,selected} = this.props;

        const list = items.map((item)=>{
            return <a onClick={onClick} id={item.id} key={item.id} class={selected === item.id ? "list-group-item active":"list-group-item"}>{item.text}</a>
        })


        return(
            <div style={style} class="col-xs-4 col-sm-3 col-md-2 col-lg-2">
                <div class="list-group">
                    {list}
                </div>
            </div>
        )
    }
}
