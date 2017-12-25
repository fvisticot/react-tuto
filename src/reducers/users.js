import {ADD_USER,
    DELETE_USER,
    REQUEST_MOOD,
    RECEIVE_MOOD
} from '../actions'

const users = (state = [], action) => {
    switch (action.type) {
        case REQUEST_MOOD:
            return state;
        case RECEIVE_MOOD:
            console.log(action.mood)
            var result = state.map((user, index) => {
                if (user.firstName === action.firstName) {
                    user.mood=action.mood
                }
                return user;
            });
            console.log(state)
            return result;
        case ADD_USER:
            return [
                ...state,
                {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    id: uuid()
                }
            ]
        case DELETE_USER:
            return state.filter(user => user.id != action.userId);
        default:
            return state;
    }
}

function uuid()
{
    var chars = '0123456789abcdef'.split('');

    var uuid = [], rnd = Math.random, r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4'; // version 4

    for (var i = 0; i < 36; i++)
    {
        if (!uuid[i])
        {
            r = 0 | rnd()*16;

            uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
        }
    }

    return uuid.join('');
}

export default users