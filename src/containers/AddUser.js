import React from "react";
import {addUser, fetchMood} from '../actions'
import { connect } from 'react-redux'

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            firstName: '',
            lastName: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dispatch = props.dispatch.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('A new user was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
        this.dispatch(addUser(this.state.firstName, this.state.lastName))
        this.dispatch(fetchMood(this.state.firstName))
        this.setState({firstName: '', lastName: ''})
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Last name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

AddUser = connect()(AddUser)
export default AddUser