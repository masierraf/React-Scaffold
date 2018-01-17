import React, { Component } from "react";

class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       
      <label>{this.props.title}</label>
    );
  }
}

export default Label;
