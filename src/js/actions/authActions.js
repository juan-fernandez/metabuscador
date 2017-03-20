function requestLogin(creds) {
    return {
        type: 'LOGIN_REQUEST',
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: 'LOGIN_SUCCESS',
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token,
        user_type: user.user_type
    }
}

function loginError(message) {
    return {
        type: 'LOGIN_FAILURE',
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    }

    return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds))

        return fetch('https://micelocator-auth.herokuapp.com/sessions/create', config)
    //return fetch("http://localhost:3002/sessions/create",config)
        .then(response =>
            response.json()
            .then(user => ({ user, response }))
        ).then(({ user, response }) =>  {
            if (!response.ok) {
                // If there was a problem, we want to
                // dispatch the error condition
                dispatch(loginError(user.message))
                return Promise.reject(user)
            }else {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', user.id_token)
                localStorage.setItem('user_type',user.user_type)
                // Dispatch the success action
                dispatch(receiveLogin(user))
            }
        }).catch(err => {
            console.log("Error: ", err)
            dispatch(loginError("Error de login"))
            })
        }
}
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('id_token')
        localStorage.removeItem('user_type')
        dispatch(receiveLogout())
    }
}
function requestLogout() {
    return {
        type: 'LOGOUT_REQUEST',
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: 'LOGOUT_SUCCESS',
        isFetching: false,
        isAuthenticated: false
    }
}
