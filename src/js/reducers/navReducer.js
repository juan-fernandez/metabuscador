export default function reducer(
state = {
    provider_view: [
        {
            id: "1",
            text: "Calendario",
        },
        {
            id: "2",
            text: "Tus espacios",
        }
    ],
    tabs:[
        {
            id:"1",
            text:"Area de Usuario",
            roles: ['proveedor'] // roles that can see this tab
        },
        {
            id:"2",
            text:"Buscador",
            roles: ['cliente','proveedor']
        }
    ],
    selected_tab: "2", // following id
    selected_provider_view: '1' // following id
},
action)
{
    switch (action.type) {
        case 'CHANGE_TAB':
            return {
                ...state,
                selected_tab:action.payload.tab
            }
        case 'PROVIDER_CHANGE_VIEW':
            return {
                ...state,
                selected_provider_view: action.payload.view
            }
    }
    return state
}
