import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {


  // async componentDidMount() {
  //   //when it is fetching the data it means it is loading so true and when it has fetched the data then loading is back to false
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: res.data, loading: false })
  // }


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>

            </div>
          </div>
        </Router >
      </AlertState>
    </GithubState>
  );
}

export default App;
