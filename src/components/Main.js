import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchCards from "./SearchCards";

import { Grid, Form, Message, Header, Segment } from "semantic-ui-react";

class Main extends React.Component {
  state = {
    messages: [],
    filterPhrase: "",
    filterBy: "name"
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("mainprops", this.props);

    let searchTeeTimes = this.props.customers
      .filter(customer => customer.name.includes(this.state.filterPhrase))
      .filter(customer => customer.tee_times.length)
      .map(customer => <SearchCards key={customer.id} customer={customer} />);
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        className="bg"
      >
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
      </Grid>

      //   <Container style={{ backgroundColor: "red", borderRadius: 0 }} fluid>
      //     <Segment inverted>
      //       <Menu inverted pointing secondary>
      //         <Menu.Item
      //           name="home"
      //           active={activeItem === "home"}
      //           onClick={this.handleItemClick}
      //         />
      //         <Menu.Item
      //           name="messages"
      //           active={activeItem === "messages"}
      //           onClick={this.handleItemClick}
      //         />
      //         <Menu.Item
      //           name="friends"
      //           active={activeItem === "friends"}
      //           onClick={this.handleItemClick}
      //         />
      //       </Menu>
      //       {/* <Image
      //         src="https://www.quinterogolf.com/assets/img/course/bkg-hole-1.jpg"
      //         fluid
      //       /> */}
      //     </Segment>
      //     <Container>
      //       <Card>
      //         <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
      //         <Card.Content>
      //           <Card.Header>Matthew</Card.Header>
      //           <Card.Meta>
      //             <span className="date">Joined in 2015</span>
      //           </Card.Meta>
      //           <Card.Description>
      //             Matthew is a musician living in Nashville.
      //           </Card.Description>
      //         </Card.Content>

      //         <Input icon="search" placeholder="Search..." />
      //       </Card>
      //     </Container>
      //   </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    customers: state.customer.all.filter(customer => customer.id),
    teeTimes: state.teeTimes.all.filter(teeTime => teeTime.id)
  };
};

export default connect(mapStateToProps)(Main);
