import React, {Component} from 'react';
import Login from "./auth/login";
import Logged from "./auth/logged";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: ''
    }
    this.logoutUser = this.logoutUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.setUser = this.setUser.bind(this)
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      this.setUser()
      this.loginUser()
    }
  }

  logoutUser() {
    this.setState({
      isLoggedIn: false
    })
  }
  loginUser() {
    this.setState({
      isLoggedIn: true
    })
  }
  setUser() {
    this.setState({
      user: localStorage.getItem('user')
    })
  }

  render() {
    return (
        <div className="App">
          {
            this.state.isLoggedIn &&
                <Logged logoutUser={this.logoutUser}/>
          }
          {
            !this.state.isLoggedIn &&
            <Login loginUser={this.loginUser} setUser = {this.setUser}/>
          }
        </div>
    );
  }
}

