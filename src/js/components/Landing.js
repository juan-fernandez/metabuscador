import React from "react"
import { connect } from "react-redux"
import {Link} from 'react-router-dom'
import {
    Redirect
} from 'react-router-dom'

// actions
import {loginUser, logoutUser} from '../actions/authActions'

// bootstrap and material ui for grid and view
import {Col, Row, Grid} from "react-bootstrap"
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';




@connect((store) => {
    return {
        auth: store.auth,
    };
})
export default class Landing extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    updateEmail(ev){
        this.setState({
            email: ev.target.value
        })
    }
    updatePassword(ev){
        this.setState({
            password: ev.target.value
        })
    }
    requestLogin(){
        let creds={
            username: this.state.email,
            password: this.state.password
        }

        this.props.dispatch(loginUser(creds))
    }
    render(){
        const {auth} = this.props;
        const style={
            landing_style:{
                marginTop:'50px'
            },
            paper_style:{
                padding: '30px',
                width: '100%',
                display: 'inline-block',
                textAlign: 'center'
            },
            text_style:{
                width:'80%'
            },
            checkbox_style:{
                marginTop:'20px',
                textAlign:'left',
                marginLeft:'10%'
            },
            button_style:{
                marginTop:'10px',
                float:'right'
            },
            errorMessage:{
                textAlign:'left',
                color:'red',
                marginLeft:'10%'
            },
            refresh:{
                display: 'inline-block',
                position: 'relative',
            },
            container: {
                position:'relative'
            }
        }

        return(
            <MuiThemeProvider>
                <Grid>
                    {auth.isAuthenticated ?
                    <Redirect to="/buscador"/>
                    :
                    ""}
                    <Row style={style.landing_style}>

                        <Col xs={12} sm={12} md={6} lg={6} xsOffset={0} smOffset={0} mdOffset={3} lgOffset={3}>

                            <Paper style={style.paper_style} zDepth={2}>
                                <div style={style.container}>
                                    <RefreshIndicator
                                      size={40}
                                      left={10}
                                      top={100}
                                      loadingColor="#FF9800"
                                      status= {auth.isFetching ? "loading":"hide"}
                                      style={style.refresh}
                                    />
                                </div>


                                <img width="100%" src="/resources/micelocator.png">
                                </img>
                                <TextField
                                    id="email"
                                    style={style.text_style}
                                    hintText="Tu E-mail"
                                    floatingLabelText="E-Mail"
                                    onChange={this.updateEmail.bind(this)}
                                    value={this.state.email}
                                />
                                <br/>
                                <TextField
                                    id="password"
                                    style={style.text_style}
                                    hintText="Tu contraseña"
                                    floatingLabelText="Contraseña"
                                    type="password"
                                    onChange={this.updatePassword.bind(this)}
                                    value={this.state.password}
                                />
                                <Checkbox
                                    style={style.checkbox_style}
                                    label="Recuérdame"
                                />
                                <p style={style.errorMessage}>
                                    {auth.errorMessage}
                                </p>
                                <RaisedButton
                                    label="Login"
                                    primary={true}
                                    style={style.button_style}
                                    onTouchTap={this.requestLogin.bind(this)}
                                />
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>

        )
    }

}
