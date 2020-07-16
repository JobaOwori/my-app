import React, { Component } from "react";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          {" "}
          <img src="/public/IMG-20160409-WA0001.jpg" alt="Me" />
        </div>
        <div>
          <h4>CONTACTS</h4>
          <ul>
            <li>Telephone: 0782010301</li>
            <li>Email: oworijoabcolllines@gmail.com</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contacts;
