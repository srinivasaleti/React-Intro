import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Links } from "./Links";
import { CustomeRouter } from "./CustomeRouter";

function App() {
  return (
    <div className="App">
      Hello World
      <hr />
      <div className="router">
        <Router>
          <Links />
          <hr />
          <CustomeRouter />
        </Router>
      </div>
    </div>
  );
}

export default App;
