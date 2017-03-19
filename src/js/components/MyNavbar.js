import React from "react"
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Date from 'material-ui/svg-icons/action/date-range'
import Building from 'material-ui/svg-icons/social/domain'

export default class MyNavbar extends React.Component{

      render(){
         const style={
            cursor: 'pointer',
            float: 'left',
         }
         const MyStyle = {
            paper: {
                display: 'inline-block',
                float: 'left',
                marginBottom: '20px'
            },
            rightIcon: {
               textAlign: 'center',
               lineHeight: '24px',
            },
            menuItem:{

            },
            menu:{
            }
         };

        const {items,onMyClick,selected} = this.props;
        console.log(onMyClick)
        const list = items.map((item)=>{
            return <MenuItem
                        leftIcon={item.id == 1 ? <Date/>:<Building/>}
                        style={MyStyle.menuItem}
                        primaryText={item.text}
                        onTouchTap={()=>{onMyClick(item.id)}}
                        id={item.id}
                        key={item.id}
                        />
        })


        return(
               <MuiThemeProvider>
                <Paper
                  style={MyStyle.paper}>
                  <Menu
                     style={MyStyle.menu}
                  >
                     {list}
                  </Menu>
                </Paper>
               </MuiThemeProvider>
        )
    }
}
