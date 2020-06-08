import React, { Component } from 'react'
import AccountBalance from './AccountBalance';

export default class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          creditInfo: {
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
        this.props.addCredits(this.state.creditInfo);
        this.setState({ redirectToHome: true });
    }

    handleSubmit = (event) => {

    }
    
    render() {
        return (
          <>
          <div>
            <h1>Credits</h1>
            </div>
          <AccountBalance accountBalance={this.props.accountBalance} />
          <div>
            <h4>Credit Total: </h4>
          </div>

          <div>
            <h4>Add Credit Information</h4>
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text"
                name="Description"
                value={this.state.creditInfo.description}
                onChange={this.handleChange}
                placeholder="Enter Description"
                />
              <input 
                name="amount"
                type="text"
                value={this.state.creditInfo.amount}
                onChange={this.handleChange}
                placeholder="Enter Amount"
              />
            </form>
          </div>

          <div>
            <h4>Credit History</h4>
          </div>
            </>
        )
    }
}