import * as React from "react";
import Grid from "./components/Grid";
import SideSearch from "./components/SideSearch";
import logo from "./logo.svg";
import "./App.css";
import "./";

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className="content bg-twitter">
      <Grid />
      <SideSearch />
    </div>
  </div>
);

export default App;
