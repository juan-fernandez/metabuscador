import React from "react"
import {Link} from 'react-router-dom'

import { connect } from "react-redux"

import {Navbar, Nav, NavItem} from "react-bootstrap"

import {logoutUser} from '../actions/authActions'

import {change_tab} from "../actions/navActions"

import {reset_search} from "../actions/spacesActions"

import {
    Redirect
} from 'react-router-dom'


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


@connect((store) => {
    return {
        auth: store.auth,
        nav: store.nav,
        spaces: store.spaces
    };
})


export default class Navbarhor extends React.Component{
    logoutUser(){
        this.props.dispatch(logoutUser())
        this.props.dispatch(reset_search())
    }
    changeTab(value){
        this.props.dispatch(change_tab(value))
    }
    render(){
        const styles = {
            appBar: {
                flexWrap: 'wrap',
                backgroundColor: '#3F51B5'
            },
            tabs: {
                width: '100%',
            },
            tab:{
                backgroundColor: '#3F51B5'
            },
            title:{
                cursor: 'pointer'
            },
            img:{
                display:'inline-block',
                width: '5%'
            }
        };
        const {auth, nav} = this.props; // tabs
        const {tabs, selected_tab} = nav;
        const {user_type} = auth;

        const filtered_tabs = tabs.filter((tab)=>{
            return tab.roles.some((role)=>{
                return role === user_type
            })
        })

        const show_tabs = filtered_tabs.map((tab)=>{
            return(
                <Tab
                    key={tab.id}
                    containerElement={tab.id == "1" ? <Link to="/user"/>:<Link to="/buscador"/>}
                    style={styles.tab}
                    icon={tab.id == "1" ? <Home/>:<Search/>}
                    label={tab.text}
                    value={tab.id}
                />
            )
        })

        return(
            <MuiThemeProvider>
               <AppBar
                  showMenuIconButton={true}
                  zDepth={2}
                  title={<span style={styles.title}>Micelocator</span>}
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
                  <Tabs
                      style={styles.tabs}
                      value={selected_tab}
                      onChange={this.changeTab.bind(this)}
                  >
                     {show_tabs}
                  </Tabs>
               </AppBar>
            </MuiThemeProvider>

      )
   }
}
