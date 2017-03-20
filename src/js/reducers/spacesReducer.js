export default function reducer(
state = {
    searched_space: false,
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
    }

    return state
}
