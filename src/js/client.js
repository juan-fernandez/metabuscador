import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect
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


ReactDOM.render(
   <Provider store={store}>
      <Router>
         <div>
            <Route exact path="/" component={Landing}/>
            <PrivateRoute path="/user" component={Layout}/>
            <PrivateRoute path="/buscador" component={Searcher}/>
         </div>
      </Router>
   </Provider>,
app);
