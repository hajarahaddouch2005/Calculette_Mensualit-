import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calcul from "./components/Calcul";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <Header />
      <Calcul />
      <Footer />
    </div>
  );
};

export default App;
