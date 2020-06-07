import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from "./components/Debits";
import Credits from "./components/Credits";


import axios from "axios"

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debitsAcc: [],
      creditsAcc: [],
    }
  }

  componentDidMount(){
    axios
        .get(`https://moj-api.herokuapp.com/debits`)
        .then((response) => {
            const data = response.data;
            this.setState({debitsAcc: data})
            })
            .catch((err) => console.log(err));
      
    axios
        .get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
          const data = response.data;
          this.setState({creditsAcc: data,});
        })
        .catch((error) => {
          console.log(error);
        });
    }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  mockDebits = (debitsInfo) => {
    const newDebit = {...this.state.debitsAcc}
    newDebit.debitsAcc = debitsInfo.debitsAcc
    this.setState({debitsAcc: newDebit})
  }

  mockCredits = (creditsInfo) => {
    const newCredits = {...this.state.creditsAcc}
    newCredits.creditsAcc = creditsInfo.creditsAcc
    this.setState({creditsAcc: newCredits})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitsComponent = () => (
      <h1>Debits</h1>
    );
    const CreditsComponent = () => (
      <h1>Debits</h1>
    );



    return (
        <Router>
          <Switch>
            <div>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
              <Route exact path="/login" render={LogInComponent}/>
              <Route exact path="/debits" render={DebitsComponent}/>
              <Route exact path="/credits" render={CreditsComponent}/>
            </div>
          </Switch>
        </Router>
    );
  }

}

export default App;