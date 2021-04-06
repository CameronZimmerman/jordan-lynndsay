import React, { Component } from "react";
import { deleteUrl } from "../utils/be-utils";

export default class Image extends Component {
  render() {
    return <img src={this.props.url} alt="url" />;
  }
}
