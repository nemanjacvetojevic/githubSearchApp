import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userListActionTypes } from '../../redux/userlist/user-list.types'

import { dataService } from '../../services/data-service/data-service'
import UserCard from '../usercard/user-card.component'

import './user-list.styles.scss'



class UserList extends React.Component {

    componentDidMount() {
        dataService.getUsers().then(res => this.props.setUsers(res))
    }

    render() {
        const users = this.props.users.map(user => (
           <Link to={`/users/${user.username}`}>
               <UserCard name={user.username} key={user.username} avatar_url={user.avatar_url} desc={user.description} />
           </Link>
        ))
        return (
            <div className="user-list">
                {users.length === 0 ? 'There is no users' : users }
            </div>              
        )
    }
}

const dispatchToProps = dispatch => ({
    setUsers: (users) => dispatch({type: userListActionTypes.SET_USERS, users })
})
    
const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, dispatchToProps)(UserList)