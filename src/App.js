import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <Contacts></Contacts>
            <Skills></Skills>
          </div>
          <div className="col-7">
            <Header></Header>
            <Body></Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
