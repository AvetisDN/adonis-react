import React, {Component} from 'react';
import axios from 'axios';

export default class Logged extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })
    }

    logOut(e) {
        axios.post('http://127.0.0.1:3333/logout',{},{})
            .then(response => {
                localStorage.removeItem('user')
                this.props.logoutUser()
                //console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <div>
                <h4>Hello, {this.state.user.user && this.state.user.user.username}</h4>
                <button className={'btn btn-danger'} onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}

