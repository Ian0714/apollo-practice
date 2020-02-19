import React from 'react';
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" components={Home}></Route>
      <Route exact path="/:id" components={Detail}></Route>
    </Router>
  );
}

export default App;
