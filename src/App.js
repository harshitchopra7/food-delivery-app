import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Restaurants from "./pages/Restaurants/Restaurants";

function App() {
  // 1. Navbar
  // a. Button

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<div>Hello</div>}></Route>
          <Route
            exact
            path="/:cityName/delivery"
            element={<Homepage />}
          ></Route>
          <Route
            exact
            path="/:cityName/restaurants"
            element={<Restaurants />}
          ></Route>
        </Routes>
        <p>Footer</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
