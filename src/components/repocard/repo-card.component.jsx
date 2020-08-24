import React from 'react'

import './repo-card.styles.scss'
import { WatchIcon, StarIcon, ForkIcon } from '../icons/icon-components'

const defaultDesc =`This is the text  provided if there is not user description at all. 
                    You don't have to read this. Or maybe this shoudn't exist at all.
                    Anyway hope to really hire me!`

const RepoCard = ({ name, desc, date, stars, watchs, forks, licence }) => (
    <div className="repo-card">
        <div className="repo-name">{ name }</div>
        <div className="repo-desc">{ desc === null ? defaultDesc : desc }</div>
        <div className="repo-info">
            <div className="stargazers"><StarIcon />{ stars }</div>
            <div className="watch-count"><WatchIcon />{ watchs }</div>
            <div className="forks-count"><ForkIcon />{ forks }</div>
            <div className="licence">Licence: { licence === null ? '' : licence }</div>
            <div className="date-created">
            <hr />
                Created: <span>{date.substring(0, 10)}</span>
            </div>
        </div>
        
    </div>
)

export default RepoCard
