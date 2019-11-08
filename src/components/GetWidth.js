import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
export default connect()(getWidth);
