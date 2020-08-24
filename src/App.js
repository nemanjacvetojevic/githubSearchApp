import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/home/homePage.component';
import UserPage from './pages/user/userPage.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component'

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/users/:user' component={ UserPage } />
        </Switch>
        <Footer />
      </div>
  )}
    

}

// const mapDispatchToProps = dispatch => ({
//   updateUsername: user => dispatch(updateUsername(user))
// })

const mapStateToProps = state => ({
  username: state.username,
  userprofile: state.userprofile,
  repos: state.repos
})

export default connect(mapStateToProps)(App);
