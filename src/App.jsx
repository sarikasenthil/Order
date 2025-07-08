


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Components/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
