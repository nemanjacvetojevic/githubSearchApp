import React from 'react'
import Error from '../../components/error/error.component'

import UserList from '../../components/users-list/user-list.component'
import SearcBar from '../../components/search/search-component'


import './homePage.styles.scss'

const HomePage = () => (
    <div className="homepage">

        <div className='container'>
            
            <Error />
            <SearcBar />
            <UserList />
        </div>
    </div>
)

export default HomePage