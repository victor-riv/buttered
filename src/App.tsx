import * as React from "react";
import Grid from "./components/Grid";
import logo from "./logo.svg";
import "./App.css";
import "./";

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className="w-5/6 mx-auto">
      <Grid />
    </div>
  </div>
);

export default App;
