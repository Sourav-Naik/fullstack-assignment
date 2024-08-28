import React from "react";
import New from "./components/New";
import Main from "./components/Main";
import Search from "./components/Search";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col justify-between cursor-default min-w-fit overflow-auto">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/search/:searchData" element={<Search />} />
          <Route exact path="/new" element={<New />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
