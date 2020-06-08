import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance';

export default class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          debitInfo: {
            id: "",
            description: "",
            amount: "",
            date: "",
          },
          redirect: false
        };
      }
      

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDebits(this.state.debitInfo);
        this.setState({ redirectToHome: true });
    }

    handleSubmit = (event) => {

    }
    
    render() {
        return (
          <>
          <div>
            <h1>Debits</h1>
            </div>
          <AccountBalance accountBalance={this.props.accountBalance} />
          <div>
            <h4>Debit Total: </h4>
          </div>

          <div>
            <h4>Add Debit Information</h4>
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text"
                name="Description"
                value={this.state.debitInfo.description}
                onChange={this.handleChange}
                placeholder="Enter Description"
                />
              <input 
                name="amount"
                type="text"
                value={this.state.debitInfo.amount}
                onChange={this.handleChange}
                placeholder="Enter Amount"
              />
            </form>
          </div>

          <div>
            <h4>Debit History</h4>
          </div>
            </>
        )
    }
}
