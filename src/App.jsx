import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/ButtonAppBar.jsx";
import { Header } from "semantic-ui-react";
import ImgCard from "./Components/ImgCard";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import logo from "./logo.png";
import Events from './Components/Events';

function App() {
  return (
    <div className="main">
      <div>
        <ButtonAppBar />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "2%",
          marginBottom: "2%",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        UPCOMING EVENTS
      </div>
      <div style={{ paddingLeft: "39%", marginTop: "1%" }}>
        <ImgCard />
      </div>
      <div
        style={{ position: "inherit", paddingLeft: "46%", paddingTop: "1%" }}
      >
        <Events />
      </div>

      
    </div>
  );
}

export default App;


