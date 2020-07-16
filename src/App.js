import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header></Header>
        <hr></hr>
        <div className="row">
          <div className="col-5">
            <div className="contacts">
              <Contacts></Contacts>
            </div>
            <div>
              <Education></Education>
            </div>
            <Skills></Skills>
          </div>
          <div className="col-7">
            <Body></Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
