import React from 'react';


import './user-card.styles.scss'

const defaultDesc =`This is the text  provided if there is not user description at all. 
                    You don't have to read this. Or maybe this shoudn't exist at all.
                    Anyway hope to really hire me!`

const UserCard = ({avatar_url, name, desc}) => (
    <div className="user-card">
        <div className="user-avatar">
            <img src={avatar_url} alt='Something' />
        </div>
        <div className="user-name">
            {name}
        </div>
        <div className="user-desc">
            {desc === undefined ? defaultDesc.split('\n', 2)[0] : desc.split('\n', 2)[0] }...
        </div>
        <div className="see-repo">
            <hr />
            <div className="see-repo-text">See Repos</div>
        </div>
        
    </div>
)

export default UserCard