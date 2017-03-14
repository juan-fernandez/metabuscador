export default function reducer(
state = {
    navbar_items:[
        {
            id: "1",
            text: "Calendario",
            selected: true
        },
        {
            id: "2",
            text: "Tus espacios",
            selected: false
        }
    ]
},
action)
{
    switch (action.type) {
        case "CHANGE_VIEW":{
            return {
                ...state,
                navbar_items: state.navbar_items.map((item)=>{
                    item.selected = false;
                    return item;
                }).map((item)=>{
                    if(item.id === action.payload.id){
                        item.selected = true;
                    }
                    return item;
                })
            }
        }
    }

    return state
}
