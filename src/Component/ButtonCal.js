import React, { Component } from "react";
import { Button } from "@material-ui/core";
export default class ButtonCal extends Component {
  render() {
    return (
      <div className={`col-${this.props.col}`}>
        <Button
          className={this.props.col === "4" ? "cal-equal" : "cal-button"}
          style={{
            backgroundColor: `${
              this.props.col === "5"
                ? "red"
                : this.props.col === "4"
                ? "blue"
                : this.props.col === "6"
                ? "#b3afaf"
                : "gray"
            }`,
          }}
          variant="contained"
          onClick={() => this.props.action(this.props.sysblom)}
        >
          {this.props.sysblom}
        </Button>
      </div>
    );
  }
}
