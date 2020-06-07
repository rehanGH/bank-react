import React, { Component } from 'react'

export default class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          debit: {
            id: "",
            description: "",
            amount: "",
            date: "",
          },
        };
      }
      
    handleChange = (event) => {

    }

    handlesubmit = (event) => {

    }
    
    render() {
        return (
            <div>
                <h1>Credits</h1>
            </div>
        )
    }
}
