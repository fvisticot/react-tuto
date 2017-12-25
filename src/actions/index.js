export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const FILTER_USERS = 'FILTER_USERS'

export const REQUEST_MOOD = 'REQUEST_MOOD'
export const RECEIVE_MOOD = 'RECEIVE_MOOD'

export function addUser(firstName, lastName) {
    console.log('Adding user: ' + firstName +' ' + lastName);
    return {
        type: ADD_USER,
        firstName: firstName,
        lastName: lastName
    }
}

export function filterUsers(filterStr) {
    console.log('Filtering users: ' + filterStr)
    return {
        type: FILTER_USERS,
        filter: filterStr
    }
}

export function deleteUser(userId) {
    return {
        type: DELETE_USER,
        userId: userId
    }
}


function requestMood(firstName) {
    return {
        type: REQUEST_MOOD
    }
}

function receiveMood(firstName, json) {
    console.log(json)
    return {
        type: RECEIVE_MOOD,
        mood: json[0].mood,
        firstName: firstName,
        receivedAt: Date.now()
    }
}

export function fetchMood(firstName) {

    return function (dispatch) {
        dispatch(requestMood(firstName))

        return fetch(`http://localhost:3004/moods?firstName=${firstName}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveMood(firstName, json))
            )
    }
}