import React from 'react';
import { connect } from 'react-redux';
import { dataService } from '../../services/data-service/data-service';
import { userListActionTypes } from '../../redux/userlist/user-list.types';
import { userActionTypes } from '../../redux/user/user.types';

import './search-component.styles.scss';

class SearchBar extends React.Component {

    onHandleChange = (e) => {
        this.props.setUser(e.target.value)
    }


    onUserSearch = () => {
        const { username } = this.props;
        if(username) {
            dataService.searchUser(username).then(res => this.props.setUsers(res))
        }
        
    }


    render() {
        return (
            <div className="search-container">
                {/* <h1>{this.props.username}</h1> */}
                <input 
                    type="text"
                    onChange={this.onHandleChange}
                    value={this.user}
                    placeholder="Search Github Users"
                    className="search-input"
                />
                  <button 
                    onClick={this.onUserSearch}
                    className="search-button"
                >
                    Search
                </button>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.user
})

const mapDispatchToProps = dispatch => ({
    setUsers: (users) => dispatch({type: userListActionTypes.SET_USERS, users }),
    setUser: (user) => dispatch({type: userActionTypes.UPDATE_USERNAME, username: user})
})
    

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)