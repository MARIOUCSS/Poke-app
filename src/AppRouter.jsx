import React from "react";
import HomePage from "./Page/HomePage";
import PokemonPage from "./Page/PokemonPage";
import SearchPage from "./Page/SearchPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
