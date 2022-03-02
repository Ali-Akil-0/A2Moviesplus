import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import styled from "styled-components";
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                <Header />
                <Details />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
