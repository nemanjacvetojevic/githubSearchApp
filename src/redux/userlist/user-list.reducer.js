import { userListActionTypes } from './user-list.types'

const INITIAL_STATE = []

const usersListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userListActionTypes.SET_USERS: 
            return action.users
        default: 
            return state
    }
}

export default usersListReducer