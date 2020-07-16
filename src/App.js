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
      <Header></Header>
      <Body></Body>
      <Skills></Skills>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
