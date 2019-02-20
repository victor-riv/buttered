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
    <div className="md:w-full lg:w-3/5 mx-auto flex">
      <div className="w-2/3">
        <Grid />
      </div>
      <div className="">
        <SideSearch />
      </div>
    </div>
  </div>
);

export default App;
