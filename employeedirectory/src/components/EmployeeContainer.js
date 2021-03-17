import React, { Component } from "react";
import API from "../utils/API";
import Header from "./Header";
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
            email: emp.email,
            phone: emp.phone,
            picture: emp.picture.large,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  };

  filteredResults = (searched) => {
    // console.log(searched);
    var results = this.state.filtered.filter((emp) => emp.name === searched);

    this.setState({
      filtered: results,
    });
  };

  // will handle the search when form is submitted and will use the value for the name
  handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    this.filteredResults(value);
    this.setState({
      [name]: value,
    });
    this.filteredResults(value);
    this.filteredResults(this.state.search);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render = () => {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <form>
            <div className="form-group">
              <input
                onChange={this.handleInputChange}
                value={this.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an Employee"
                id="search"
              />
              <button
                onClick={this.handleSubmit}
                className="btn btn-primary mt-3"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default Results;
