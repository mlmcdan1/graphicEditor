import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/common/Header";

function App() {
  return (
    <Router>
      {/* Header is placed outside the Routes */}
      <Header/>
      <Routes>
        <Route exact path='/' Component={LandingPage}/>
      </Routes>
    </Router>
  );
}

export default App;
