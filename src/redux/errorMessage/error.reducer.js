import { errorActionTypes } from './error.types';

const INITIAL_STATE = {
    isError: false,
    message: ''
}

const errorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case errorActionTypes.SET_ERROR: 
            return {
                isError: true,
                message: action.message
            }
        case errorActionTypes.CLEAR_ERROR: 
           return {
               isError: false,
               message: ''
           } 
        default: 
            return state
    }
}

export default errorReducer