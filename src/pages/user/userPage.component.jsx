import React from 'react'

import './userPage.styles.scss' 

import RepoList from '../../components/repo-list/repo-list.component'

const UserPage = ({ match }) => (
    <div className="userpage">
        <div className="container">
            <RepoList user={match.params.user} />
        </div>
        
    </div>
)

export default UserPage