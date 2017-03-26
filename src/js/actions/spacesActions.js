var axios = require('axios')

export function searchSpace(){
    return {
        type: "SEARCH_SPACE",
    }
}
export function reset_search(){
    return{
        type: "RESET_SEARCH"
    }
}
export function request_add_space(space_info){
   return{
      type: 'REQUEST_ADD_SPACE'
   }
}
export function failed_add_space(error){
   return{
      type: 'FAILED_ADD_SPACE',
      payload:{
         error
      }
   }
}
export function success_add_space(space_info,response){
   space_info.servicios=[""];
   space_info.imagen=[""]
   return{
      type: 'SUCCESS_ADD_SPACE',
      payload:{
         response,
         space_info
      }
   }
}
export function request_fetch_spaces(){
   return{
      type: 'REQUEST_FETCH_SPACES'
   }
}
export function success_fetch_spaces(spaces){
   return{
      type: 'SUCCESS_FETCH_SPACES',
      payload:{
         spaces
      }
   }
}
export function failed_fetch_spaces(error){
   return{
      type: 'FAILED_FETCH_SPACES',
      payload:{
         error
      }
   }
}

export function add_space(space_info){

   return dispatch =>{
      dispatch(request_add_space(space_info))
      return axios.post('https://micelocator-auth.herokuapp.com/spaces',space_info)
      .then((response)=>{
         console.log('response',response)
         dispatch(success_add_space(space_info,response))
      })
      .catch((err)=>{
         dispatch(failed_add_space(err))
         console.log('error',err)
      })
   }
}

export function fetch_spaces(){

   return dispatch=>{
      dispatch(request_fetch_spaces())
      return axios.get('https://micelocator-auth.herokuapp.com/spaces')
      .then((response)=>{
         console.log('response fetch spages',response)
         dispatch(success_fetch_spaces(response.data))
      })
      .catch((err)=>{
         dispatch(failed_fetch_spaces(err))
         console.log('error',err)
      })
   }
}
