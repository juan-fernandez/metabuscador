import React from "react"

export default class MyNavbar extends React.Component{

    render(){
        const style={

        }
        const {items,onClick,selected} = this.props;

        const list = items.map((item)=>{
            return <a onClick={onClick} id={item.id} key={item.id} class={selected === item.id ? "list-group-item active":"list-group-item"}>{item.text}</a>
        })


        return(
            <div>
                <div class="list-group">
                    {list}
                </div>
            </div>
        )
    }
}
