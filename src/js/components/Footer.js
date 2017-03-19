import React from "react"
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Footer extends React.Component {
   render(){
      const style={
         backgroundColor: '#3F51B5',
         color: '#fff',
         paddingTop: '40px',
         paddingBottom: '40px',
         marginTop: '10px',
         marginBottom: '10px'
      }
      return(
         <MuiThemeProvider>
            <Paper style={style} zDepth={2}>
               <footer  class="text-center">
                  <p><img width="60px" src="resources/7_logo.png"/>Made by 7inEvent <a style={{color:'white'}} href="http://www.7inevent.com">7inevent.com</a></p>
               </footer>
            </Paper>
         </MuiThemeProvider>


      )
   }

}
