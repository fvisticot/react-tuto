import React, { Component}  from 'react';
import UserRow from './UserRow'

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = props.onDeleteClick.bind(this);
    }

    handleOnClick(userId) {
        console.log("Deleting userId" + userId)
    }

    render() {
        const users = this.props.users;
        return (
            <table>
                <tr><th>Id</th><th>firstName</th><th>lastName</th><th>Mood</th><th>Action</th></tr>
                {users.map(user => <UserRow onDeleteClick={() => this.onDeleteClick(user.id)} user={user} key={user.id.toString()}/>)}
            </table>
        );
    }
}

export default UserTable