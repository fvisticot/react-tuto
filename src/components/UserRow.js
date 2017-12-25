import React, { Component}  from 'react';

class UserRow extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = props.onDeleteClick.bind(this);
    }

    render() {
        const user = this.props.user;
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.mood}</td>
                <td><button onClick={this.onDeleteClick}>Delete</button></td>
            </tr>
        );
    }


}

export default UserRow