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
    <div className="w-4/5 mx-auto flex bg-yellow lg:bg-blue xl:bg-orange">
      <Grid />
      <SideSearch />
    </div>
  </div>
);

export default App;
