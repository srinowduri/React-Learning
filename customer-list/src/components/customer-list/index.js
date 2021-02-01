import React, { Component }  from "react";
import "./index.css";

class CustomerList extends Component {
  state = {
    name: '',
    customerList: []
  }

  handleName = (event) => {
    this.setState({
      name: event.target.name
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.state.customerList.push(this.state.name);
    this.setState({
      customerList: this.state.customerList
    });

  }

  listOfCustomers() {
    return this.state.customerList.map(customer => {
      return <li>{customer}</li>
    });
  }
  render() {
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input"
                onChange={this.handleName}
                value={this.state.name}/>
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={this.onSubmit}>Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
          <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >Customer
          {this.listOfCustomers()} </li>
      </ul>
    </div>
  );
  }
}

export default CustomerList