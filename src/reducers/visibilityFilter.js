import {FILTER_USERS} from '../actions'

const visibilityFilter = (state = '', action) => {
    console.log(action)
    console.log(state)

    switch (action.type) {
        case FILTER_USERS:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter