import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect,
   Switch
} from 'react-router-dom'

import Layout from "./components/Layout"
import Searcher from "./components/Searcher"

import Landing from "./components/Landing"

import store from "./store"

const app = document.getElementById('app')



const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().auth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const ProveedorRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    (store.getState().auth.isAuthenticated && store.getState().auth.user_type == 'proveedor') ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <Switch>
            <Route path="/" exact component={Landing}/>
            <ProveedorRoute path="/user" component={Layout}/>
            <PrivateRoute path="/buscador" component={Searcher}/>
            <Route component={NoMatch}/>
         </Switch>
      </Router>
   </Provider>,
app);
