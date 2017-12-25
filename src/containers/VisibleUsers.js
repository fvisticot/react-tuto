import { connect } from 'react-redux'
import UserTable from '../components/UserTable'
import { deleteUser } from '../actions'

const getVisibleUsers = (users, filter) => {
    return users.filter(user => user.firstName.includes(filter));
}

const mapStateToProps = state => {
    return {
        users: getVisibleUsers(state.users, state.visibilityFilter),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteClick: id => {
            dispatch(deleteUser(id))
        }
    }
}

const VisibleUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTable)

export default VisibleUsers