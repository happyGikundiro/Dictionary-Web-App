import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300">
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
