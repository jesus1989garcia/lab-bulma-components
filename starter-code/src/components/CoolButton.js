import React, { Component } from "react";

export default class CoolButton extends Component {

  constructor(props) {
    super(props)

  }
  render() {
    return (
      <span>
        <button className="button is-rounded my-class is-danger is-small">Button 1</button>
         <button className="button is-small is-success">Button 2</button>
      </span>
      
    )
  }
}