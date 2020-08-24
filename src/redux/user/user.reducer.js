import { userActionTypes } from './user.types'

const INITIAL_STATE = ''

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.UPDATE_USERNAME:
            return  action.username;
        default:
            return state
    }
}

export default userReducer