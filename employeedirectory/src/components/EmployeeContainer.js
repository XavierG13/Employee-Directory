import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
  state = {
    search: "",
    employees: [],
    filtered: [],
  };

  componentDidMount = () => {
    API.search()
      .then((res) => {
        this.setState({
          filtered: res.data.results.map((emp, id) => ({
            // console.log(emp);
            name: emp.name,
            picture: emp.picture.large,
            email: emp.email,
            phone: emp.phone,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  };

  render = () => {
    return (
      <div className="container">
        <form>
          <input
            type="text"
            value={this.state.search}
            placeholder="Find First Name"
            onChange={this.searchEmployee}
          ></input>
          <button onClick={this.searchResults}> Search Employee</button>
        </form>

        <thead>
          <tr>
            <th scope="col">Profile Picture: {this.employee}</th>
            <th scope="col">First/Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.filtered.map(({ picture, name, email, phone }) => {
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
