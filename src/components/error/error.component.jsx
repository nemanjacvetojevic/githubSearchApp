import React from 'react'
import { connect } from 'react-redux'
import { errorActionTypes } from '../../redux/errorMessage/error.types'

const Error = ({error, clearError}) => (
    error.isError ? <div className="error-message">{error.message} <span onClick={clearError}>x</span></div> : null
)

const mapStateToProps = state => ({
    error: state.error
})

const dispatchStateToPros = dispatch => ({
    clearError: () => dispatch({type: errorActionTypes.CLEAR_ERROR})
})

export default connect(mapStateToProps, dispatchStateToPros)(Error)