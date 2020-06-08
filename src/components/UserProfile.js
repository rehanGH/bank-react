import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div className="user-profile">
          <h1 className="user-profile">User Profile</h1>
          <div className="user-profile">Username: {this.props.userName}</div>
          <div className="user-profile">Member Since: {this.props.memberSince}</div> <br/>
          <Link to="/">Back to Home</Link>
        </div>
    );
  }
}

export default UserProfile;