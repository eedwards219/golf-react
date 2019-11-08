import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchAllCustomers } from "./store/customers/actions";
import { fetchAllTeeTimes } from "./store/tee_times/actions";
import Main from "./components/Main";
import SearchCards from "./components/SearchCards";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchAllTeeTimes();
    this.props.fetchAllCustomers();
    // fetchAllMessagesByUserId(this.props.loggedInUser.id);
    // this.props.fetchAllMessages();
  }
  render() {
    return (
      <Router>
        <script type="text/javascript" src="/js/styles.js"></script>

        <div className="App">
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/search" component={SearchCards} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("state", state);
  console.log("props", props);

  return {
    // customers: this.state.customers,
    // tee_times: this.state.tee_times
  };
};
export default connect(
  mapStateToProps,
  {
    fetchAllCustomers,
    fetchAllTeeTimes

    // fetchAllMessages
  }
)(App);
