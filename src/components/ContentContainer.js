import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchCards from "./SearchCards";
import NavBar from "../components/NavBar";

import { Grid, Form, Message, Header, Segment, Menu } from "semantic-ui-react";
import AddTeeTime from "./AddTeeTime";

class ContentContainer extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  state = {
    filterPhrase: "",
    filterBy: "name"
  };
  render() {
    let searchTeeTimes = this.props.customers
      .filter(customer => customer.name.includes(this.state.filterPhrase))
      .filter(customer => customer.tee_times.length)
      .map(customer => <SearchCards key={customer.id} customer={customer} />);

    return (
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center"></Header>
        <Form size="large" textAlign="center">
          <Segment stacked>
            <Header as="h2" color="teal" textAlign="center">
              Check your Tee Times
            </Header>
            <Form.Input
              type="text"
              onChange={this.handleChange}
              name="filterPhrase"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Your name"
            />
            {/* <Button color="teal" fluid size="large">
                Search
              </Button> */}
          </Segment>
        </Form>
        <Message textAlign="center">{searchTeeTimes}</Message>
      </Grid.Column>
    );
  }
}
const mapStateToProps = state => {
  return {
    customers: state.customer.all.filter(customer => customer.id),
    teeTimes: state.teeTimes.all.filter(teeTime => teeTime.id)
  };
};
export default connect(mapStateToProps)(ContentContainer);
