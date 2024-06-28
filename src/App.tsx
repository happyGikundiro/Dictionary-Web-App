import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import ContextProvider from "./context/context";

const App: React.FC = () => {
  // const { mode } = useContext(Context);
  return (
    <ContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" Component={HomePage} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
