import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
  state = {
    search: "",
    employees: [],
    filtered: [],
  };

  componentDidMount = () => {
    API.getEmployee().then((res) => {
      console.log(res.data.results);
      let employee = res.data.results;
      this.setState({ employee });
    });
  };

  searchEmployee = (e) => {
    const search = this.setState({ search: e.target.value });
    console.log(search);
    // return search;
  };

  searchResults = (e) => {
    e.preventDefault();
  };

  render = () => {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          placeholder="Find First Name"
          onChange={this.searchEmployee}
        ></input>
        <button onClick={this.searchResults}> Search Employee</button>

        <thead>
          <tr>
            <th scope="col">Profile Picture</th>
            <th scope="col">First/Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.employee.map(({ picture, name, email, phone }) => {
              return (
                <tr>
                  <th scope="col">{picture}</th>
                  <th scope="col">{name}</th>
                  <th scope="col">{email}</th>
                  <th scope="col">{phone}</th>
                </tr>
              );
            })}
          </tr>
        </tbody>
      </div>
    );
  };
}

export default Results;
