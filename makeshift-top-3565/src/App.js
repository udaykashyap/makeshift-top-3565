import React from "react";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import SingleProduct from "./components/SingleProduct";
import MainRouter from "./page/MainRouter";
const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouter />
      <Footer />
    </div>
  );
};
export default App;
