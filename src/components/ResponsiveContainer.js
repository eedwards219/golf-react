import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
export default connect()(ResponsiveContainer);
