import React, { Component } from "react";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div style={{ float: "center" }}>
        <h4>SKILLS</h4>
        <div className="container-small">
          <table>
            <th>
              <tr>Javascript</tr>
              <tr>NodeJS</tr>
              <tr>CSS</tr>
              <tr>Jokes</tr>
            </th>
            <th>
              <tr>3/5</tr>
              <tr>2/5</tr>
              <tr>3/5</tr>
              <tr>5/5</tr>
            </th>
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
