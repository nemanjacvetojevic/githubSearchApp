import { combineReducers } from 'redux'

import userReducer from './user/user.reducer';
import usersListReducer from './userlist/user-list.reducer';
import errorReducer from './errorMessage/error.reducer';
import reposReducer from './repos/repos.reducer'

export default combineReducers({
    user: userReducer,
    users: usersListReducer,
    error: errorReducer,
    repos: reposReducer
})