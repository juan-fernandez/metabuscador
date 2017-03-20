export default function reducer(
state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    user_type: localStorage.getItem('user_type'),
    errorMessage: null,
    id_token: localStorage.getItem('id_token')
},
action)
{
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds,
                errorMessage:null,
            })
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: null,
                user_type: action.user_type
            })
        case 'LOGIN_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case 'LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage:null
            })
    }
    return state
}
