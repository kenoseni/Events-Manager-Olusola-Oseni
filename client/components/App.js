import React, {Component} from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Main from './Main';
import SigninPage from './SigninPage'

export default class App extends Component {
    render () {
        
        return (
        <div>
            <Navbar />
            <LandingPage /> 
            <Main /> 
            <SigninPage /> 
        </div>
        )
    }
}
