import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserProfile, LogIn, Debits, Home, Credits} from "./components"
import axios from "axios"

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
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
            const debitData = response.debitData;
            this.setState({debitsAcc: debitData})
            })
            .catch((err) => console.log(err));
      
    axios
        .get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
          const creditData = response.creditData;
          this.setState({creditsAcc: creditData,});
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

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitsComponent = () => (
      <Debits 
        accountBalance={this.state.accountBalance}
        debitsAcc={this.state.debitsAcc}
      />
      );
    const CreditsComponent = () => (
      <Credits 
        accountBalance={this.state.accountBalance}
        debitsAcc={this.state.debitsAcc}
      />
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