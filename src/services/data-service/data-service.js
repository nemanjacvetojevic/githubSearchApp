class DataService {
    static SEARCH_URL = `https://api.github.com/search`
    static USERS_URL = `https://api.github.com/users`;
    static REPO_URL = (user) => `${DataService.USERS_URL}/${user}/repos`
    static SEARCH_USER_URL = (user) => `${DataService.SEARCH_URL}/users?q=${user}`
    getUsers() {

        return fetch(DataService.USERS_URL)
        .then(res => (
            res.json()
        ))
        .then( res => res.map( r => ({
            username: r.login,
            avatar_url: r.avatar_url,
            desc: r.bio
        })

        ))
    }


    getRepos(user) {
        return fetch(DataService.REPO_URL(user))
        .then(res => (
            res.json()
        ))
        .then( res => res.map( r => ({
            repoName: r.name,
            repoDesc: r.description,
            repoDate: r.created_at,
            repoOwner: r.owner.login,
            repoStar: r.stargazers_count,
            repoWatch: r.watchers_count,
            repoForks: r.forks_count,
            repoLicence: r.license !== null ? r.license.name : ''
        })))
    }

    searchUser(user) {
        return fetch(DataService.SEARCH_USER_URL(user))
        .then(res => (
            res.json()
        ))
        .then( res => res.items.map( r => ({
            username: r.login,
            avatar_url: r.avatar_url
        })))
    }

}

export const dataService = new DataService()