import React from "react";
import { addTeeTime } from "../store/tee_times/actions";
import moment from "moment";
// import { DatetimePickerTrigger } from "rc-datetime-picker";
import NavBar from "./NavBar";
import SearchCardsAdd from "./SearchCardsAdd";
import { Link } from "react-router-dom";

import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";
// import { DateTimePicker } from "./TimePicker";
import {
  Grid,
  Form,
  Message,
  Header,
  Checkbox,
  Segment,
  Menu,
  Button
} from "semantic-ui-react";

import { connect } from "react-redux";

class AddTeeTime extends React.Component {
  state = {
    newStatus: "",
    moment: moment(),
    date: "",
    time: "",
    dateTime: "",
    datesRange: "",
    filterPhrase: "",
    filterBy: "name",
    golfers: ""
  };
  onChange = time => this.setState({ time });
  onClick = () => {
    this.handleClick(this.props.customer.id);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addTeeTime({
        content: this.state.newTeeTime,
        user_id: 16
      })
    );
  };
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  handleNameSearch = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    let searchTeeTimes = this.props.customers
      .filter(customer => customer.name.includes(this.state.filterPhrase))
      .filter(customer => customer.tee_times.length)
      .map(customer => (
        <SearchCardsAdd key={customer.id} customer={customer} />
      ));
    console.log("addprops", this.props);
    return (
      <React.Fragment>
        <NavBar />

        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          //   verticalAlign="middle"
          className="bg"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Pick A Time</label>
                  <Form>
                    <DateTimeInput
                      name="dateTime"
                      placeholder="Date Time"
                      value={this.state.dateTime}
                      iconPosition="left"
                      onChange={this.handleChange}
                    />
                  </Form>
                </Form.Field>
                <Form.Field>
                  <label>Search By Name</label>
                  <Form.Input
                    type="text"
                    onChange={this.handleNameSearch}
                    name="filterPhrase"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                  />

                  {searchTeeTimes}
                </Form.Field>

                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    customers: state.customer.all.filter(customer => customer.id),
    teeTimes: state.teeTimes.all.filter(teeTime => teeTime.id),
    items: state.golfers
  };
};
export default connect(mapStateToProps)(AddTeeTime);
