export default function reducer(
state = {
   isFetching: false,
   isAuthenticated: localStorage.getItem('id_token') ? true : false,
   user_type: "proveedor",
   errorMessage: ""
},
action)
{
   switch (action.type) {
      case 'LOGIN_REQUEST':
         return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            user: action.creds
      })
      case 'LOGIN_SUCCESS':
         return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            errorMessage: '',
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
            isFetching: true,
            isAuthenticated: false
         })
   }
   return state
}
