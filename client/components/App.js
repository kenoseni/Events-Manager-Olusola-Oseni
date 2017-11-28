import React, {Component} from 'react';
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default class App extends Component {
    render () {
        return (
        <div>
            <Navbar />
            <LandingPage />
            <SignUp />
            <SignIn />   
        </div>
        )
    }
}
