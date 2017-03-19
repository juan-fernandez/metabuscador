import React from "react"
import {Link} from 'react-router-dom'

import { connect } from "react-redux"

import {Navbar, Nav, NavItem} from "react-bootstrap"

import {logoutUser} from '../actions/authActions'

// Material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';

import {AppBar, Tabs, Tab, ToolbarGroup, FlatButton} from 'material-ui'
import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';
import Search from 'material-ui/svg-icons/action/search';
import Power from 'material-ui/svg-icons/action/power-settings-new'

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';


import {
   Redirect
} from 'react-router-dom'




@connect((store) => {
    return {
        auth: store.auth,
    };
})


export default class Navbarhor extends React.Component{
   logoutUser(){
      this.props.dispatch(logoutUser())
   }
   render(){
      const {auth} = this.props;
      console.log(auth)
      const styles = {
         appBar: {
            flexWrap: 'wrap',
            backgroundColor: '#673AB7'
         },
         tabs: {
            width: '100%',

         },
         tab:{
            backgroundColor: '#673AB7'
         }
      };
      return(
         <div>
            <MuiThemeProvider>
               <AppBar
                  zDepth={2}
                  title="Micelocator"
                  style={styles.appBar}
                  iconElementRight={<FlatButton
                                    containerElement={<Link to="/"/>}
                                    label="Logout"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<Power/>}
                                    onClick={this.logoutUser.bind(this)}
                                    />
                                 }
               >
                  <Tabs style={styles.tabs}>
                     {auth.user_type == 'proveedor' ?
                                         <Tab
                                           containerElement={<Link to="/user"/>}
                                           style={styles.tab}
                                           icon={<Home/>}
                                           label={"Área de proveedor"}
                                           />
                                         :
                                          ""}
                     <Tab
                        containerElement={<Link to="/buscador"/>}
                        style={styles.tab}
                        icon={<Search/>}
                        label={'Buscador'} />
                  </Tabs>
               </AppBar>
            </MuiThemeProvider>
         </div>

      )
   }
}
