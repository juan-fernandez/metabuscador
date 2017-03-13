import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom'

import Layout from "./components/Layout"
import Searcher from "./components/Searcher"

import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <div>
            <Route exact path="/" component={Layout}/>
            <Route path="/buscador" component={Searcher}/>
         </div>
      </Router>
   </Provider>,
app);
