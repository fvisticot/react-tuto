import React, { Component}  from 'react';
import {filterUsers} from '../actions'
import {connect} from "react-redux";

class UserFilter extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.dispatch = props.dispatch.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            filterStr: value
        });
        this.dispatch(filterUsers(value))
    }

    render() {
        return (
            <div>Filter: <input type='text' onChange={this.handleInputChange}></input></div>
        );
    }


}

UserFilter = connect()(UserFilter)
export default UserFilter