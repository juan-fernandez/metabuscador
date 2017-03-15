export default function reducer(
state = {

    adding_event: false, // flag to show modal
    space_name: "",
    date_new_event: null,
    clicked_event: -1,
    removing_event: false, //flag to show modal to remove
    espacios: [
            {
                    nombre: "Sala Sinfónica",
                    superficie: 722.25,
                    altura: {
                                a1: 6.58,
                                a2:9.36,
                                a3: 12
                            },
                    largo_ancho: [35.14,25.73,17.60],
                    aforo: {
                            teatro:{
                                platea: 910,
                                filas_foso: 48,
                                palcos:24
                                }
                        },
                    precio: 3000,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner11sala-sinfonica.jpg"
            },
            {
                    nombre: "Sala Dorsal",
                    superficie: 271.77,
                    altura: {
                                a1: 6.13,
                                a2:10.39,
                                a3: 8.33
                            },
                    largo_ancho: [14.04,22.30,19.50],
                    aforo: {
                            teatro:{
                                platea: 384,
                                palcos: 10,
                                }
                        },
                    precio: 1500,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de cámara",
                    superficie: "327.82",
                    altura: {
                                a1: "6.81",
                                a2:"11.55",
                                a3: "11.55"
                            },
                    largo_ancho: [21.36,17.68,16.00],
                    aforo: {
                            teatro:427
                        },
                    precio: 1500,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Conferencias 1",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Conferencias 2 (con pupitre)",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Conferencias 3",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Prensa",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala Multifuncional 1",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Multifuncional 2",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Multifuncional 3",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Camerino individual",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Camerino Doble",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Camerino Colectivo",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Guardarropía",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
            {
                    nombre: "Sala de Exposiciones Lienzo Norte",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner12sala-de-exposiciones.jpg"
            },
            {
                    nombre: "Exposición en Zonas Comunes",
                    superficie: "",
                    altura: {
                                a1: "",
                                a2:"",
                                a3: ""
                            },
                    largo_ancho: [0,0,0],
                    aforo: {
                            teatro:0
                        },
                    precio: 0,
                    servicios: [
                        ''
                    ],
                    imagen: "http://www.lienzonorte.es/public/banners/banner13hall.jpg"
            },
    ],
    date_range: {
        from:'2017-03-01 0:00',
        to:'2017-03-30 0:00'
    },
    active_events: [],
},
action)
{
    switch (action.type) {
        case "ADD_EVENT":{ // opening modal, not yet added
            console.log(action.payload)
            return{
                ...state,
                adding_event: true,
                date_new_event: action.payload.date_new_event
            }
        }
        case "NEW_EVENT":{
            return{
                ...state,
                events: [...state.events,
                            {
                                title: state.space_name,
                                date: state.date_new_event,
                                allDay: true
                            }
                        ],
                date_new_event: null,
                space_name: "",
            }
        }
        case "CLOSE_MODAL":{
            return{
                ...state,
                adding_event: false,
                removing_event: false,
                clicked_event: -1,
                date_new_event: null,
                space_name: "",
            }
        }
        case "UPDATE_SPACE":{
            return{
                ...state,
                space_name: action.payload.space_name
            }
        }
        case "CLICK_EVENT":{
            return{
                ...state,
                removing_event: true,
                clicked_event: action.payload.event_date
            }
        }
        case "REMOVE_EVENT":{
            return {
                events: state.events.filter((event)=>{
                    if(event.date === state.clicked_event){
                        return false;
                    }
                    return true;
                }),
                removing_event: false,
                clicked_event: -1,
            }
        }
        case "MOVE_EVENT":{

            return {
                ...state,
                events: state.events.map((event)=>{
                    if(event.date === action.payload.event_date){
                        let date = new Date(action.payload.event_date);
                        date.setDate(date.getDate()+action.payload.delta._days)
                        return{
                            ...event,
                            date: date
                        }
                    }
                    return event;
                })
            }

        }
      case "TOGGLE_EVENT":{
         console.log("reducer:",action.payload)
         let found = false;
         let filtered = state.active_events.filter((event_id)=>{
            if(event_id == action.payload.id){
               found = true;
               return false
            }
            return true;
         })
         if(!found){
            filtered = [
               ...state.active_events,
               action.payload.id
            ]
         }
         console.log(filtered)
         return {
            ...state,
            active_events: filtered
         }

      }
    }

    return state
}
