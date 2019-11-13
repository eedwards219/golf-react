import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchCards from "./SearchCards";
import { Grid, Form, Message, Header, Segment, Menu } from "semantic-ui-react";

class NavBar extends React.Component {
  state = {
    messages: [],
    filterPhrase: "",
    filterBy: "name",
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="Check Tee Times"
            active={activeItem === "Check Tee Times"}
            onClick={this.handleItemClick}
            href="/"
          />
          <Menu.Item
            name="Add A Tee Time"
            active={activeItem === "Add A Tee Time"}
            onClick={this.handleItemClick}
            href="./add"
          />
          <Menu.Item
            name="Cancel A Tee Time"
            active={activeItem === "Cancel A Tee Time"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Edit A Tee Time"
            active={activeItem === "Edit A Tee Time"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
export default connect()(NavBar);
