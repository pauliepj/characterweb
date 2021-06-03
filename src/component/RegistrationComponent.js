import React, { Component } from 'react';
import RegistrationDataService from '../service/RegistrationDataService';


class RegistrationComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        RegistrationDataService.showRegistrationForm()
        .then(
            response => {
                console.log(response);
                this.setState({users: response.data})
            }
        )
    }
    render(){
        return (<>
            <h1>Registration Page</h1>
            {/* <RegistrationDataService/> */}
                {/* Add in registration form here */}
            </>
        )
    }
}

export default RegistrationComponent;