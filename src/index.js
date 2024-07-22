import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import HomePage from "./pages/homepage/HomePage";
import MovieList from "./components/MovieList/MovieList";
import MoviePage from "./pages/moviepage/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:type" element={<MovieList />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  </BrowserRouter>
);
