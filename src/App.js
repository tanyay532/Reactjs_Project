import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      loading: false
    }
  }

  async componentDidMount() {
    //when it is fetching the data it means it is loading so true and when it has fetched the data then loading is back to false
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* sending the user details(from github) as props to get displayed in users.js */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
