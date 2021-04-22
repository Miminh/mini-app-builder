import React from "react";
import BuilderContainer from "./components/BuilderContainer/BuilderContainer";
import ToolBlock from "./components/ToolBlock/ToolBlock";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BuilderContainer />
      <ToolBlock />
    </div>
  );
};

export default App;
