import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";

import { Grid } from "semantic-ui-react";
import ContentContainer from "./ContentContainer";

class Main extends React.Component {
  render() {
    console.log("mainprops", this.props);

    return (
      <React.Fragment>
        <NavBar />
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
          className="bg"
        >
          <ContentContainer />
        </Grid>
      </React.Fragment>
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

export default connect()(Main);
