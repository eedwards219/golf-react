import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Container, Header, Icon } from "semantic-ui-react";
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="We Got Golf and Shit"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Do like tee times and shit."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
export default connect()(HomepageHeading);
