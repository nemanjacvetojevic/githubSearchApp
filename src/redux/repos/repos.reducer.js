import { reposActionTypes } from './repos.types';

const INITIAL_STATE = []

const reposReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case reposActionTypes.SET_REPOS: 
        return  action.repos
        default:
            return state
    }
}

export default reposReducer