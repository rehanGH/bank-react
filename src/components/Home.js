import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "./Nav.css"

class Home extends Component {
  render() {
    const navStyle = {
      color: 'white'
    }
    return (
    <div>
      <nav>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <ul className="nav-links">
            <Link to="/login" style={navStyle}><li>Login</li></Link><br/>
            <Link to="/userProfile" style={navStyle}><li>User Profile</li></Link><br/>
            <Link to="/debits" style={navStyle}><li>Debits</li></Link><br/>
            <Link to="/credits" style={navStyle}><li>Credits</li></Link>
          </ul>
      </nav>
          <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;