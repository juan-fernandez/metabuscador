export default function reducer(
state = {
    searched_space: false,
    spaces:[]
},
action)
{
    switch (action.type) {
        case "SEARCH_SPACE":{
            return {
                ...state,
                searched_space: true
            }
        }
        case "RESET_SEARCH":{
            return {
                ...state,
                searched_space: false
            }
        }
        case "ADD_SPACE":{
           console.log('reducer add space',action.payload)
           return state
        }
    }

    return state
}
