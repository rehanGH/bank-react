import React, { Component } from 'react';
import axios from "axios";

export default class Debits extends Component {
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
                <h1>Debits</h1>
            </div>
        )
    }
}
