import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
  state = {
    search: "",
    employee: [],
  };

  componentDidMount = () => {
    API.getEmployee().then((res) => {
      console.log(res.data.results);
    });
  };

  searchEmployee = (e) => {
    this.setState({ search: e.target.value });
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

        <thead>
          <tr>
            <th scope="col">Profile Picture</th>
            <th scope="col">First/Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
      </div>
    );
  };
}

export default Results;
