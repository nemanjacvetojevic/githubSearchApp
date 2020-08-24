import React from 'react'

import RepoCard from '../repocard/repo-card.component';
import { connect } from 'react-redux';
import { dataService } from '../../services/data-service/data-service'; 
import { reposActionTypes } from '../../redux/repos/repos.types';


import './repo-list.styles.scss'

class RepoList extends React.Component {
    static GITHUB_URL = `https://github.com/`;

    componentDidMount() {
        dataService.getRepos(this.props.user).then(res => this.props.setRepos(res))
    }

    render() {
        const repos = this.props.repos.map(repo => (
            <a href={`${RepoList.GITHUB_URL}${repo.repoOwner}/${repo.repoName}`} target="_blank" rel="noopener noreferrer"> 
                <RepoCard name={repo.repoName} key={repo.repoName} desc={repo.repoDesc} date={repo.repoDate} stars={repo.repoStar} watchs={repo.repoWatch} forks={repo.repoForks} licence={repo.repoLicence} />
            </a>
        ))
        return (
            <div>
                <h2>Repo List</h2>
                <hr />
                <div className='repos-container'>
                { repos.length === 0 ? 'There is no repos' : repos }
             </div>
            </div>
             
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setRepos: (repos) => dispatch({type: reposActionTypes.SET_REPOS, repos })
})

const mapStateToProps = state => ({
    repos: state.repos
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)